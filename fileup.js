const form = document.getElementById("uploadForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file to upload.");
    return;
  }

  const supabaseUrl = "https://uryjsoflpaycebbdoijr.supabase.co"; // Replace with your Supabase URL
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeWpzb2ZscGF5Y2ViYmRvaWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5MDM4ODAsImV4cCI6MTk5NDQ3OTg4MH0.7SMduIi9AHCtV_FE1JYwLmw4XpmL6c49RvapSfh2qPE"; // Replace with your Supabase API key
  const storage = supabase.createStorage(supabaseUrl, supabaseKey);

  const { data, error } = await storage.from("pics").upload(file.name, file);

  if (error) {
    console.error(error);
    alert("Failed to upload file.");
  } else {
    console.log(data);
    alert("File uploaded successfully.");
  }
});
