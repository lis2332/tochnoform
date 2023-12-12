

const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
searchBtn.onclick =()=>{
  searchBox.classList.add("searchactive");
  searchBtn.classList.add("searchactive");
  searchInput.classList.add("searchactive");
  cancelBtn.classList.add("searchactive");
  searchInput.focus();
  if(searchInput.value != ""){
    var values = searchInput.value;
    searchData.classList.remove("searchactive");
    searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
  }else{
    searchData.textContent = "";
  }
}
cancelBtn.onclick =()=>{
  searchBox.classList.remove("searchactive");
  searchBtn.classList.remove("searchactive");
  searchInput.classList.remove("searchactive");
  cancelBtn.classList.remove("searchactive");
  searchData.classList.toggle("searchactive");
  searchInput.value = "";
}


$(document).ready(function() {
  // При нажатии на кнопку с классом ectproject__pdj
  $(".ectproject__pdj").click(function() {
      // Скрыть блок с классом main
      $(".page-pdj").hide();
      
      // Отобразить новый блок и добавить ему класс pdj-new-block
      $(".pdj-new-block").show().addClass("pdj-new-block-active");
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Получаем все чекбоксы с классом welcome-checkboxtwo
  var checkboxes = document.querySelectorAll('.welcome-checkboxfree');

  // Добавляем обработчик события change к каждому чекбоксу
  checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
          // Получаем родительский элемент pdj-new__block-two_info
          var blockInfo = this.closest('.pdj-new__block-two_info');

          // Проверяем, выбран ли чекбокс
          if (this.checked) {
              // Если выбран, добавляем класс
              blockInfo.classList.add('pdj-new__block-two_info-active');
          } else {
              // Если не выбран, удаляем класс
              blockInfo.classList.remove('pdj-new__block-two_info-active');
          }
      });
  });
});