//your code here
const reset_btn = document.getElementById('reset');
const verify_btn = document.getElementById('verify');
const result = document.querySelector('#para');
let selectedDivs_count = 0;

function arrange_img_randomly() {
    verify_btn.style.display = 'none';
	reset_btn.style.display = 'none';
    result.innerText = null;
    selectedDivs_count = 0;
	
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
		arr.push(duplicate_num);
	}

	const allImages = document.querySelectorAll('.flex > img');
	allImages.forEach((image, i) => {
		image.classList.add(`img${arr[i]}`);
		image.classList.remove('selected');
	})
    getAllImages();
}

arrange_img_randomly();

function getAllImages() {
    const all_images = document.querySelectorAll('.flex > img');

    all_images.forEach((img) => {
        img.onclick = () => {
            img.classList.add('selected');
			reset_btn.style.display = 'block';
            selectedDivs_count++;
            if(selectedDivs_count == 2) {
                verify_btn.style.display = 'block';
            } else {
                verify_btn.style.display = 'none';
			}
        }
    })
}


function verify() {
    let imgIdArr = [];
	const all_images = document.querySelectorAll('.flex > img');

	for(let i=0; i<all_images.length; i++) {
		if(all_images[i].classList[1] == 'selected') {
			imgIdArr.push(all_images[i].classList[0]);
		}
	}
	console.log('textArr', imgIdArr);
	
    result.innerText = null;

    if(imgIdArr[0] == imgIdArr[1]) {
		verify_btn.style.display = 'none';
        result.innerText = 'You are a human. Congratulations!'
    } else {
		verify_btn.style.display = 'none';
        result.innerText = `We can't verify you as a human. You selected the non-identical tiles.`
    }

    document.body.append(result);
}
