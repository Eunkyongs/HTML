var namea = [
	{ "person": "김수빈", "email": "kim@nate.com" },
	{ "person": "김정민", "email": "jungmin@gmail.com" },
	{ "person": "오유나", "email": "ouna123@gmail.com" },
	{ "person": "김진수", "email": "kimjsu@nate.com" },
	{ "person": "김창순", "email": "soon0707@naver.com" },
	{ "person": "이유림", "email": "limlee@gmail.com" },
	{ "person": "하윤성", "email": "hayounsong@naver.com" },
];


function nameck(a) {
	console.log(a);
	var w = 0;
	var zz = 0;

	while (w < namea.length) {
	//	console.log(namea[w]["person"]);
		if (a == namea[w]["person"]) {
			zz = 1;
			console.log("고객명:" + namea[w]["person"] + ", 이메일:" + namea[w]["email"]);
			}
		w++;
	}
	if (zz == 0) {
		console.log("해당 사용자는 검색대상에 없습니다.");
	}
}