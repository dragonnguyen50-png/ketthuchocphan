const products=["iPhone","Samsung","Laptop","Tai nghe","Chuột"];

const productDiv=document.getElementById("products");
if(productDiv){
  function render(list){
    productDiv.innerHTML=list.map(p=>`<div class='card'>${p}</div>`).join("");
  }
  render(products);

  document.getElementById("search").addEventListener("input",e=>{
    const value=e.target.value.toLowerCase();
    const filtered=products.filter(p=>p.toLowerCase().includes(value));
    if(filtered.length===0){
      document.getElementById("error").innerText="Không tìm thấy";
    }else{
      document.getElementById("error").innerText="";
    }
    render(filtered);
  });
}

// form
const form=document.getElementById("form");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const email=document.getElementById("email").value;
    const pass=document.getElementById("password").value;
    const agree=document.getElementById("agree").checked;

    const valid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(pass);

    if(!valid||!agree){
      document.getElementById("msg").innerText="Sai dữ liệu";
      return;
    }

    localStorage.setItem("user",JSON.stringify({email}));
    document.getElementById("msg").innerText="Thành công";
  });
}

// countdown
const timer=document.getElementById("timer");
if(timer){
  let time=600;
  const interval=setInterval(()=>{
    let m=Math.floor(time/60);
    let s=time%60;
    timer.innerText=`${m}:${s<10?"0":""}${s}`;

    if(time<=60){
      timer.style.color="red";
    }

    if(time--<=0){
      clearInterval(interval);
      alert("Hết giờ");
    }
  },1000);
}
