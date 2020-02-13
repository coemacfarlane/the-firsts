// expand and shrink book summary in the blurb
var summ_btn = document.getElementById("read_more");
var summ = document.getElementById("summary");
summ_btn.addEventListener("click", function() {
  summ.classList.toggle("close");
  summ.classList.toggle("open");
  if (summ.classList.contains("close")) {
    summ_btn.innerHTML = "read more";
  } else {
    summ_btn.innerHTML = "read less";
  }
});
