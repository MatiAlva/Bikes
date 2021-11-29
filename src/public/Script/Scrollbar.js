let Progress = document.getElementById('progressbar');

let TotalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let ProgressHeight = (window.pageYOffset / TotalHeight) * 100;
    Progress.style.height = ProgressHeight + "%";
}