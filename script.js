document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("inputString");
  const resetBtn = document.getElementById("resetBtn");

  function autoResize(el) {		//auto resiving 
    el.style.height = "auto";                // Reset height
    el.style.height = el.scrollHeight + "px"; // Adjust to content
  }
  
  function convertToJson() {	//covert button
    try {
      const input = document.getElementById("inputString").value.trim();
      let jsonData = JSON.parse(input);
	  document.getElementById("inputString").value  = JSON.stringify(jsonData, null, 2);
    } catch (error) {
      console.error("Invalid JSON:", error.message);
      alert("❌ Invalid JSON!",error.message);
	  const match = error.message.match(/position (\d+)/);
	  if (match) {
		const pos = parseInt(match[1], 10);

		// Highlight error position in textarea
		textarea.focus();
		textarea.setSelectionRange(pos, pos + 1);
    } else {
      alert("Invalid JSON! Please check your input.");
    }
      return null;
    }
  }

  textarea.addEventListener("input", () => autoResize(textarea));

  resetBtn.addEventListener("click", () => {	//reset button
    textarea.value = "";
    textarea.style.height = "80vh";
  });
  window.convertToJson = convertToJson;

  textarea.style.height = "80vh";
});
