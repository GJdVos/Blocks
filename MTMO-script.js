window.onload=function(){var receiver=document.getElementById('mtmo-frame-one').contentWindow;function sendMessage(e){receiver.postMessage('Iframe setup','https://beoordelingen.mtmo.nl')}
sendMessage();function receiveMessage(e){if(e.origin!=="https://beoordelingen.mtmo.nl")
return;var pass_data=JSON.parse(e.data);action=pass_data.action;if(action=="height"){height=pass_data.value;document.getElementById(pass_data.id).height=height;var myEle=document.getElementById("bodycontent");if(myEle){document.getElementById("bodycontent").getElementsByClassName("blokLayout")[0].style.height=height+"px"}}
if(action=="scroll"){const id=pass_data.id;const yOffset=-100;const element=document.getElementById(id);const y=element.getBoundingClientRect().top+window.pageYOffset+yOffset;window.scrollTo({top:y,behavior:'smooth'})}}
window.addEventListener('message',receiveMessage)}