const reveals=[...document.querySelectorAll('.reveal')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
reveals.forEach((e,i)=>{e.style.transitionDelay=`${Math.min(i*70,420)}ms`;io.observe(e)});
const form=document.querySelector('#crewForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const code='MARS-'+Math.random().toString(36).slice(2,6).toUpperCase()+'-'+Math.floor(100+Math.random()*900);form.style.display='none';const s=document.querySelector('.success');if(s){s.style.display='block';s.classList.add('show');s.querySelector('.code').textContent=code;s.scrollIntoView({behavior:'smooth',block:'center'})}})}
const next=document.querySelector('.next-btn');if(next){next.addEventListener('click',e=>{document.body.classList.add('leaving');setTimeout(()=>{location.href=next.href},260)})}
document.querySelectorAll('a[href$=".html"]').forEach(a=>{a.addEventListener('click',e=>{if(a.target||a.getAttribute('href').startsWith('#')||a.classList.contains('next-btn'))return;e.preventDefault();document.body.classList.add('leaving');setTimeout(()=>location.href=a.href,260)})});
