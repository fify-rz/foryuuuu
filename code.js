const byeSound = document.getElementById('byeSound');
byeSound.play();

const portal = document.createElement('div');
portal.id = "portalEffect";
document.body.appendChild(portal);

setTimeout(() => {
  portal.remove();
}, 1000);
