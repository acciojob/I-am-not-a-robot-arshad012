//your code here
let arr = [];
let selectedDivs_count = 0;

function arrange_img_randomly() {
    document.getElementById('verify-btn').style.display = 'none';
    document.querySelector('.result').innerText = null;
    // const flex_container = document.querySelector('.flex');
    selectedDivs_count = 0;
    // flex_container.innerHTML = null;
    let arr = [];

    while(true) {
        let num = Math.floor(Math.random()*6);
        if(num == 0) {
            continue;
        }
        if(arr.includes(num)) {
            continue;
        }
        else {
            arr.push(num);
            if(arr.length == 5) {
                break;
            }
        }
    }

	let duplicate_num = Math.floor(Math.random()*5);
    if(duplicate_num < 1) {
		arr.push(1);
	} else {
		arr.push(duplicate_num = 1);
	}

	const allImages = document.querySelectorAll('.flex > img');
	console.log(allImages);
	allImages.forEach((image, i) => {
		image.classList.add(`img${arr[i]}`);
	})
	

 //    const img1 = document.querySelector('.img1');
	// img1.classList.add('img1');
    
 //    const img2 = document.querySelector('.img2');
	// img2.classList.add('img2');
    
 //    const img3 = document.querySelector('.img3');
	// img3.classList.add('img3');
    
 //    const img4 = document.querySelector('.img4');
 //    img4.classList.add('img4');
	
 //    const img5 = document.querySelector('.img5');
 //    img5.classList.add('img5');

 //    const duplicateImg = document.querySelector('.duplicate');
 //    duplicateImg.classList.add(`img${n}`);

	
    // getAllBoxes();
}

arrange_img_randomly();

function getAllBoxes() {
    const all_boxes = document.querySelectorAll('.flex > img');
    
    all_boxes.forEach((box) => {
        box.onclick = () => {
            box.style.borderColor = 'blue';
            selectedDivs_count++;
            if(selectedDivs_count == 2) {
                document.getElementById('verify-btn').style.display = 'block';
            }
        }
    })
}


function verify() {
    let textArr = [];

    const all_boxes = document.querySelectorAll('.flex > img');

    all_boxes.forEach((box) => {
        if(box.style.borderColor == 'blue') {
            textArr.push(box.innerText);
        }
    })
    // console.log(arr);
    
    const result = document.querySelector('.result');
    result.innerText = null;

    if(textArr[0] == textArr[1]) {
        result.innerText = 'You are a human, Congratulations!'
    } else {
        result.innerText = 'We have not recognized you as a human.'
    }

    document.body.append(result);
}