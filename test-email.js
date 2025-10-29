// Quick test script for the lead API endpoint
// Run with: node test-email.js

const testData = {
  name: "Test User",
  email: "test@example.com",
  position: "Developer",
  useCase: "Testing the email notification system",
  source: "test_script",
};

fetch("http://localhost:3000/api/lead", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(testData),
})
  .then((res) => res.json())
  .then((data) => {
    console.log("✅ Success:", data);
    console.log(
      "\nCheck your email at:",
      process.env.ALERT_TO || "shinerock.technologies@gmail.com"
    );
  })
  .catch((err) => {
    console.error("❌ Error:", err);
  });
