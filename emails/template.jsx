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

// Enhanced Styles with Dark Theme
const styles = {
  body: {
    backgroundColor: "#0F172A", // Dark background
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    color: "#E2E8F0", // Light text for dark background
    lineHeight: "1.6",
  },
  container: {
    backgroundColor: "#1E293B", // Slightly lighter dark background for container
    margin: "0 auto",
    padding: "30px",
    maxWidth: "600px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "28px",
    color: "#3B82F6", // Blue-500 primary color
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "16px",
    color: "#E2E8F0",
    marginBottom: "15px",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#3B82F6", // Blue-500
    marginBottom: "10px",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center", // Centered horizontally
    marginBottom: "25px",
    gap: "15px",
  },
  stat: {
    flex: "0 1 auto", // Allow flexible sizing without growing
    padding: "15px",
    backgroundColor: "#2C3E50", // Dark card background
    borderRadius: "8px",
    textAlign: "center",
    border: "1px solid #3B82F6", // Blue border
  },
  statValue: {
    fontSize: "22px",
    color: "#3B82F6", // Blue-500 for important numbers
    fontWeight: "bold",
  },
  section: {
    marginBottom: "25px",
    padding: "15px",
    backgroundColor: "#2C3E50",
    borderRadius: "8px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #475569", // Dark border
    padding: "10px 0",
    alignItems: "center",
  },
  rowText: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  warningText: {
    color: "#EF4444", // Red for warnings
    fontWeight: "bold",
  },
  footer: {
    fontSize: "14px",
    color: "#64748B", // Muted text
    textAlign: "center",
    marginTop: "20px",
    borderTop: "1px solid #475569",
    paddingTop: "15px",
  },
};

export default function EmailTemplate({
  userName = "",
  type = "monthly-report",
  data = {},
}) {
  // Format number with Rupee symbol for display
  const formatRupees = (amount) => {
    return `₹${Number(amount).toFixed(2)}`;
  };

  // Capitalize first letter of each word
  const capitalizeText = (text) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (type === "monthly-report") {
    return (
      <Html>
        <Head />
        <Preview>Your Finance Tracker Monthly Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.title}>
              Your Budget Buddy Monthly Report
            </Heading>

            <Text style={styles.text}>Hi {userName},</Text>
            <Text style={styles.text}>
              Here's your financial summary for {data?.month}:
            </Text>

            {/* Overview of Spending */}
            <Section style={styles.section}>
              <Text style={styles.text}>
                Total Income: {formatRupees(data?.stats.totalIncome)}
                <br />
                Total Expenses: {formatRupees(data?.stats.totalExpenses)} (
                {(
                  (data?.stats.totalExpenses / data?.stats.totalIncome) *
                  100
                ).toFixed(1)}
                % of income)
                <br />
                Savings:{" "}
                {formatRupees(
                  data?.stats.totalIncome - data?.stats.totalExpenses
                )}{" "}
                (
                {(
                  ((data?.stats.totalIncome - data?.stats.totalExpenses) /
                    data?.stats.totalIncome) *
                  100
                ).toFixed(1)}
                % of income)
              </Text>
            </Section>

            {/* Top Spending Categories */}
            {data?.stats?.byCategory && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>
                  Top Spending Categories
                </Heading>
                {Object.entries(data?.stats.byCategory)
                  .sort(([, a], [, b]) => b - a) // Sort by amount
                  .slice(0, 5) // Get top 5 categories
                  .map(([category, amount]) => (
                    <Text key={category} style={styles.text}>
                      {capitalizeText(category)}: {formatRupees(amount)} (
                      {((amount / data?.stats.totalExpenses) * 100).toFixed(1)}
                      %)
                    </Text>
                  ))}
              </Section>
            )}

            {/* Budget Analysis */}
            <Section style={styles.section}>
              <Heading style={styles.heading}>Budget Analysis</Heading>
              <Text style={styles.text}>{data.insights.budgetAnalysis}</Text>
            </Section>

            {/* Actionable Insights */}
            {data?.insights?.actionableInsights && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Actionable Insights</Heading>
                {data.insights.actionableInsights.map((insight, index) => (
                  <Text key={index} style={styles.text}>
                    • {insight}
                  </Text>
                ))}
              </Section>
            )}

            {/* Personalized Tips */}
            {data?.insights?.personalizedTips && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Personalized Tips</Heading>
                {data.insights.personalizedTips.map((tip, index) => (
                  <Text key={index} style={styles.text}>
                    • {tip}
                  </Text>
                ))}
              </Section>
            )}

            <Text style={styles.text}>
              Was this report helpful? Let us know how we can improve!
            </Text>

            <Text style={styles.footer}>
              Here's to smarter spending in{" "}
              {new Date().toLocaleString("default", { month: "long" })}!
              <br />
              Your Budget Buddy Team
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }

  if (type === "budget-alert") {
    return (
      <Html>
        <Head />
        <Preview>Budget Alert - Spending Threshold Reached</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.title}>
              Heads Up! You've Reached More Than 85% of Your Budget
            </Heading>

            <Text style={styles.text}>Hi {userName},</Text>
            {data?.percentageUsed > 85 && data?.percentageUsed < 100 && (
              <Text style={styles.text}>
                We noticed you're nearing your budget limit for this month.{" "}
              </Text>
            )}

            {data?.percentageUsed >= 100 && (
              <Text style={styles.text}>
                You have exceeded your budget limit for this month.{" "}
              </Text>
            )}

            <Section style={styles.section}>
              <Text style={styles.text}>
                Your current spending is {formatRupees(data?.totalExpenses)},
                which is {data?.percentageUsed.toFixed(1)}% of your set budget
                of {formatRupees(data?.budgetAmount)}.
              </Text>
            </Section>

            {/* Breakdown */}
            <Section style={styles.section}>
              <Heading style={styles.heading}>Spending Breakdown</Heading>
              {data?.breakdown &&
                data.breakdown.map((item, index) => (
                  <Text key={index} style={styles.text}>
                    {item.category}: {formatRupees(item.amount)} (
                    {item.percentage}% of budget)
                  </Text>
                ))}
            </Section>

            {/* Actionable Suggestions */}
            <Section style={styles.section}>
              <Heading style={styles.heading}>Actionable Suggestions</Heading>
              {data?.actionableInsights &&
                data.actionableInsights.map((insight, index) => (
                  <Text key={index} style={styles.text}>
                    • {insight}
                  </Text>
                ))}
            </Section>

            <Text style={styles.footer}>
              You’ve got this! Small changes can make a big difference.
              <br />
              Your Budget Buddy Team
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }

  return null;
}
