import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";

export const onRequest: PagesFunction = staticFormsPlugin({
  respondWith: async ({ formData, name }) => {
    // Extract form data
    const nameField = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Log submission (you can see this in Cloudflare dashboard logs)
    console.log("Form submission:", { name: nameField, email, message });

    // TODO: Add email notification or KV storage here
    // For now, just return a success response

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
});
