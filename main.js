const burger = document.getElementById('menu');
const navigation = document.querySelector('.navigation__menu_flex');

burger.addEventListener('click', () => {
   if(burger.checked){
    navigation.classList.toggle('navigation__open')
   }else {
    navigation.classList.remove('navigation__open')
   }
});