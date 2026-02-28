/* ================= LOADER ================= */
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

/* ================= PROGRESS BAR ================= */
window.addEventListener("scroll", () => {
  let winScroll = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  document.getElementById("progress").style.width =
    (winScroll / height) * 100 + "%";
});

/* ================= DARK MODE ================= */
function toggleTheme() {
  document.body.classList.toggle("dark");
}

/* ================= SECTION REVEAL ================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

/* ================= PARTICLES HERO ================= */
const canvas = document.getElementById("particles");

if (canvas) {
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  let particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      d: Math.random() * 0.5 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0,113,227,0.3)";

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.y += p.d;

      if (p.y > canvas.height) {
        p.y = 0;
        p.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}

/* ================= TABLEAU DASHBOARD ================= */
const dashboard = document.getElementById("vizDashboard");

if (dashboard) {
  dashboard.innerHTML = `
<div class='tableauPlaceholder' id='viz1771407486139' style='position: relative'>
<noscript>
<a href='#'>
<img alt='Dashboard 1'
src='https://public.tableau.com/static/images/Da/Dashboard_17714060069480/Dashboard1/1_rss.png'
style='border:none'/>
</a>
</noscript>

<object class='tableauViz' style='display:none;'>
<param name='host_url' value='https://public.tableau.com/'/>
<param name='embed_code_version' value='3'/>
<param name='site_root' value=''/>
<param name='name' value='Dashboard_17714060069480/Dashboard1'/>
<param name='tabs' value='no'/>
<param name='toolbar' value='yes'/>
<param name='animate_transition' value='yes'/>
<param name='display_spinner' value='yes'/>
</object>
</div>
`;

  let divElement = document.getElementById("viz1771407486139");
  let vizElement = divElement.getElementsByTagName("object")[0];

  vizElement.style.width = "100%";
  vizElement.style.height = "650px";

  let scriptElement = document.createElement("script");
  scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
}

/* ================= TABLEAU STORY ================= */
const story = document.getElementById("vizStory");

if (story) {
  story.innerHTML = `
<div class='tableauPlaceholder' id='viz1771413919417' style='position: relative'>
<noscript>
<a href='#'>
<img alt='Story'
src='https://public.tableau.com/static/images/St/Story_17714138723510/StoryonElectricityConsumptioninIndia/1_rss.png'
style='border:none'/>
</a>
</noscript>

<object class='tableauViz' style='display:none;'>
<param name='host_url' value='https://public.tableau.com/'/>
<param name='embed_code_version' value='3'/>
<param name='site_root' value=''/>
<param name='name' value='Story_17714138723510/StoryonElectricityConsumptioninIndia'/>
<param name='tabs' value='no'/>
<param name='toolbar' value='yes'/>
</object>
</div>
`;

  let divElement = document.getElementById("viz1771413919417");
  let vizElement = divElement.getElementsByTagName("object")[0];

  vizElement.style.width = "100%";
  vizElement.style.height = "650px";

  let scriptElement = document.createElement("script");
  scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
}
