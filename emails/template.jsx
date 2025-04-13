import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  
  // Dummy data for preview
  const PREVIEW_DATA = {
    "monthly-report": {
      userName: "John Doe",
      data: {
        month: "December",
        stats: {
          totalIncome: 5000,
          totalExpenses: 3500,
          byCategory: {
            housing: 1500,
            groceries: 600,
            transportation: 400,
            entertainment: 300,
            utilities: 700,
          },
        },
        insights: [
          "Your housing expenses are 43% of your total spending - consider reviewing your housing costs.",
          "Great job keeping entertainment expenses under control this month!",
          "Setting up automatic savings could help you save 20% more of your income.",
        ],
      },
    },
    "budget-alert": {
      userName: "John Doe",
      data: {
        percentageUsed: 85,
        budgetAmount: 4000,
        totalExpenses: 3400,
      },
    },
  };
  
  export default function EmailTemplate({
    userName,
    type = "monthly-report",
    data,
  }) {
    // Safe fallbacks
    const preview = PREVIEW_DATA[type] || {};
    const finalUserName = userName || preview.userName || "User";
    const finalData = data || preview.data || {};
  
    if (type === "monthly-report") {
      const stats = finalData?.stats || { totalIncome: 0, totalExpenses: 0, byCategory: {} };
  
      return (
        <Html>
          <Head />
          <Preview>Your Monthly Financial Report</Preview>
          <Body style={styles.body}>
            <Container style={styles.container}>
              <Heading style={styles.title}>Monthly Financial Report</Heading>
  
              <Text style={styles.text}>Hello {finalUserName},</Text>
              <Text style={styles.text}>
                Here&rsquo;s your financial summary for {finalData?.month || "this month"}:
              </Text>
  
              <Section style={styles.statsContainer}>
                <div style={styles.stat}>
                  <Text style={styles.text}>Total Income</Text>
                  <Text style={styles.heading}>${stats.totalIncome}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.text}>Total Expenses</Text>
                  <Text style={styles.heading}>${stats.totalExpenses}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.text}>Net</Text>
                  <Text style={styles.heading}>${stats.totalIncome - stats.totalExpenses}</Text>
                </div>
              </Section>
  
              {stats.byCategory && (
                <Section style={styles.section}>
                  <Heading style={styles.heading}>Expenses by Category</Heading>
                  {Object.entries(stats.byCategory).map(([category, amount]) => (
                    <div key={category} style={styles.row}>
                      <Text style={styles.text}>{category}</Text>
                      <Text style={styles.text}>${amount}</Text>
                    </div>
                  ))}
                </Section>
              )}
  
              {finalData?.insights && (
                <Section style={styles.section}>
                  <Heading style={styles.heading}>Wall8 exculsive Insights</Heading>
                  {finalData.insights.map((insight, index) => (
                    <Text key={index} style={styles.text}>
                      • {insight}
                    </Text>
                  ))}
                </Section>
              )}
  
              <Text style={styles.footer}>
                Thank you for using Wall8. Keep tracking your finances for better financial health!
              </Text>
            </Container>
          </Body>
        </Html>
      );
    }
  
    if (type === "budget-alert") {
      const percentageUsed = finalData?.percentageUsed ?? 0;
      const budgetAmount = finalData?.budgetAmount ?? 0;
      const totalExpenses = finalData?.totalExpenses ?? 0;
  
      return (
        <Html>
          <Head />
          <Preview>Budget Alert</Preview>
          <Body style={styles.body}>
            <Container style={styles.container}>
              <Heading style={styles.title}>Budget Alert</Heading>
              <Text style={styles.text}>Hello {finalUserName},</Text>
              <Text style={styles.text}>
                You&rsquo;ve used {percentageUsed.toFixed(1)}% of your monthly budget.
              </Text>
              <Section style={styles.statsContainer}>
                <div style={styles.stat}>
                  <Text style={styles.text}>Budget Amount</Text>
                  <Text style={styles.heading}>${budgetAmount}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.text}>Spent So Far</Text>
                  <Text style={styles.heading}>${totalExpenses}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.text}>Remaining</Text>
                  <Text style={styles.heading}>${budgetAmount - totalExpenses}</Text>
                </div>
              </Section>
            </Container>
          </Body>
        </Html>
      );
    }
  
    return null; // fallback if type is unknown
  }
  
  const styles = {
    body: {
      backgroundColor: "#f6f9fc",
      fontFamily: "-apple-system, sans-serif",
    },
    container: {
      backgroundColor: "#ffffff",
      margin: "0 auto",
      padding: "20px",
      borderRadius: "5px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    title: {
      color: "#1f2937",
      fontSize: "32px",
      fontWeight: "bold",
      textAlign: "center",
      margin: "0 0 20px",
    },
    heading: {
      color: "#1f2937",
      fontSize: "20px",
      fontWeight: "600",
      margin: "0 0 16px",
    },
    text: {
      color: "#4b5563",
      fontSize: "16px",
      margin: "0 0 16px",
    },
    section: {
      marginTop: "32px",
      padding: "20px",
      backgroundColor: "#f9fafb",
      borderRadius: "5px",
      border: "1px solid #e5e7eb",
    },
    statsContainer: {
      margin: "32px 0",
      padding: "20px",
      backgroundColor: "#f9fafb",
      borderRadius: "5px",
    },
    stat: {
      marginBottom: "16px",
      padding: "12px",
      backgroundColor: "#fff",
      borderRadius: "4px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      padding: "12px 0",
      borderBottom: "1px solid #e5e7eb",
    },
    footer: {
      color: "#6b7280",
      fontSize: "14px",
      textAlign: "center",
      marginTop: "32px",
      paddingTop: "16px",
      borderTop: "1px solid #e5e7eb",
    },
  };
  