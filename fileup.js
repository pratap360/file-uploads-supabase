// Replace with your Supabase URL
// const supabaseUrl = ""; 
// Replace with your Supabase API key
// const supabaseKey = "";
// const storage = supabase.createStorage(supabaseUrl, supabaseKey);

const { createClient } = supabase
 
supabase = createClient("https://uryjsoflpaycebbdoijr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeWpzb2ZscGF5Y2ViYmRvaWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5MDM4ODAsImV4cCI6MTk5NDQ3OTg4MH0.7SMduIi9AHCtV_FE1JYwLmw4XpmL6c49RvapSfh2qPE")


const img = document.getElementById("uploadImg");
const imgUrl = ref(null)
const showOverlay = ref(null)


  // const fileInput = document.getElementById("fileInput");
  const fileInput = async(event) => {
    const file = event.target.files[0];
    if (!file) return
    // if (!file) {
    //   alert("Please select a file to upload.");
    //   return;
    // }
    showOverlay.value = true
    
  const { data, error } = await supabase
  .storage
  .from("pics")
  // .upload(file.name, file);
  .upload(`pics_${Date.now()}.jpg`, file);
  showOverlay.value = false

  if (error) {
    console.error(error);
    alert("Failed to upload file.");
  } else {
    console.log(data);
    alert("File uploaded successfully.");
  }

  imgUrl.value = URL.createObjectURL(file)

}

console.log(
  img,
  imgUrl,
  showOverlay,
  fileInput
)