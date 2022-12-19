const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Create DOM elements:Render facts in list
// console.log(initialFacts[1].text);
factsList.innerHTML = "";

//data from supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://svbvgnxicdyriltawrlp.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2YnZnbnhpY2R5cmlsdGF3cmxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExOTUzMzgsImV4cCI6MTk4Njc3MTMzOH0.FlK3VGuhXk--sOvlj3vD0J1m_aXH0v6WGzNBSWZZN2U",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2YnZnbnhpY2R5cmlsdGF3cmxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExOTUzMzgsImV4cCI6MTk4Njc3MTMzOH0.FlK3VGuhXk--sOvlj3vD0J1m_aXH0v6WGzNBSWZZN2U",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
  console.log(data);
}

// factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
        <p>
        ${fact.text}
        <a class="source" href="https://opensource.fb.com/">(Source)</a>
      </p>
      <span class="tag" style="background-color: #3b82f6">
       ${fact.category}</span>
      </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//toggle foggle visibility
btn.addEventListener("click", function () {
  factsList.innerHTML = "";
  form.classList.toggle("hidden");
  if (form.classList.contains("hidden")) {
    btn.textContent = "Share a fact";
  } else btn.textContent = "Close";
});
