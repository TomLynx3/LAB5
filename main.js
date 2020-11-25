
const fillUp = document.getElementById('fill')
const sequenceDiv = document.getElementById('sequence');
const remove=document.getElementById('remove');
const output = document.getElementById('output')
let sequence = [];



function fillSeq () {
    sequenceDiv.innerHTML = '';
    if(document.getElementById('number777').style.display='block'){
        document.getElementById('number777').style.display='none'
    }
    let i=10;
   while(i>=6){
    sequence.push(fibonacci(i));
    i--;
   }

   
  
   
   sequence.map((item)=>{
    const node = document.createElement('span');
    const textnode = document.createTextNode(item);
    const randomHexColor = Math.floor(Math.random()*16777215).toString(16);
    node.style.color = "#"+randomHexColor;
    node.classList.add("numbers");
    node.appendChild(textnode);
    sequenceDiv.appendChild(node)
   })
   

   
   sequence=[]
   
    
}

function remove6(){
    if(document.getElementById("sequence").childElementCount>0 && document.getElementById("sequence").childElementCount>=5 ){
        document.getElementById('remove').disabled=true;
        
        sequenceDiv.lastChild.classList.remove('offset')
        sequenceDiv.lastChild.classList.add("last")
        
        setTimeout(()=>{
            document.getElementById("sequence").lastChild.remove()
            document.getElementById('remove').disabled=false
        },1800)
        
       
    }
   
}

function transform10(e){
    if(e.target.innerHTML == '89'){
        
        document.getElementById('number777').style.display='block'
        document.getElementById("sequence").firstChild.classList.add('transform')
        const spanNodes = document.querySelectorAll('.numbers')
       
        for(let i=0;i<spanNodes.length;i++){
            if(spanNodes[i].classList !='numbers transform'){
                spanNodes[i].classList.add('offset')
                spanNodes[i].style.left='50px'
            }
            
        }

        setTimeout(()=>{
            document.getElementById("sequence").firstChild.remove()
            const empty = document.createElement('span');
            const textnode = document.createTextNode("");
            empty.appendChild(textnode)
            document.getElementById('sequence').prepend(empty)
            
        },1800)
       
    }

    
}

  const fibonacci = (num) => {
    let a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }


fillUp.addEventListener('click',fillSeq);
remove.addEventListener('click',remove6);
output.addEventListener('click',transform10)

