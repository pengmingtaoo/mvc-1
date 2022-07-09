import './app2.css';
import  $ from 'jquery';

const $tabbar = $('#app2 .tab-bar');
const $tabcontent = $('#app2 .tab-content');
$tabbar.on('click','li',e=>{
  console.log(e.currentTarget)
 const $li = $(e.currentTarget);
  console.log($li.index())
  const $index = $li.index();
$tabcontent.children()
    .eq($index).addClass('active')
    .siblings().removeClass('active');
})