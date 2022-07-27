function saklarMasterKeluarga() {
    let saklarMasterKeluarga = document.getElementById('cetrekan');

    let bohlam1 = document.getElementById('lampu1');
    let bohlam2 = document.getElementById('lampu2');
    let bohlam3 = document.getElementById('lampu3');
 
    if (saklarMasterKeluarga.checked) {
        bohlam1.src = "assets/images/on.gif";
        bohlam2.src = "assets/images/on.gif";
        bohlam3.src = "assets/images/on.gif";
    } else {
        bohlam1.src = "assets/images/off.gif";
        bohlam2.src = "assets/images/off.gif";
        bohlam3.src = "assets/images/off.gif";
    };
};

function saklarMasterMakan() {
    let saklarMaster = document.getElementById('cetrekanMasterMakan');

    let bohlam1 = document.getElementById('lampu4');

    if (saklarMaster.checked) {
        bohlam1.src = "assets/images/on.gif";
    } else {
        bohlam1.src = "assets/images/off.gif";
    };
};

function saklarMasterTidur() {
    let saklarMaster = document.getElementById('cetrekanMasterTidur');

    let bohlam1 = document.getElementById('lampu5');
    let bohlam2 = document.getElementById('lampu6');

    if (saklarMaster.checked) {
        bohlam1.src = "assets/images/on.gif";
        bohlam2.src = "assets/images/on.gif";
    } else {
        bohlam1.src = "assets/images/off.gif";
        bohlam2.src = "assets/images/off.gif";
    };
};

function saklarMasterTamu() {
    let saklarMasterTamu = document.getElementById('cetrekanMasterTamu');

    let bohlam1 = document.getElementById('lampu7');
    let bohlam2 = document.getElementById('lampu8');
    let bohlam3 = document.getElementById('lampu9');
    let bohlam4 = document.getElementById('lampu10');

    if (saklarMasterTamu.checked) {
        bohlam1.src = "assets/images/on.gif";
        bohlam2.src = "assets/images/on.gif";
        bohlam3.src = "assets/images/on.gif";
        bohlam4.src = "assets/images/on.gif";
    } else {
        bohlam1.src = "assets/images/off.gif";
        bohlam2.src = "assets/images/off.gif";
        bohlam3.src = "assets/images/off.gif";
        bohlam4.src = "assets/images/off.gif";
    };
};


function saklarKeluarga() {
    let checkbox1 = document.getElementById('cetrekan1');
    let checkbox2 = document.getElementById('cetrekan2');
    let checkbox3 = document.getElementById('cetrekan3');

    let bohlam1 = document.getElementById('lampu1');
    let bohlam2 = document.getElementById('lampu2');
    let bohlam3 = document.getElementById('lampu3');

    if (checkbox1.checked) {
        bohlam1.src = "assets/images/on.gif";
    } else {
        bohlam1.src = "assets/images/off.gif";
    };
    if (checkbox2.checked) {
        bohlam2.src = "assets/images/on.gif";
    } else {
        bohlam2.src = "assets/images/off.gif";
    };
    if (checkbox3.checked) {
        bohlam3.src = "assets/images/on.gif";
    } else {
        bohlam3.src = "assets/images/off.gif";
    };
};

function saklarTidur() {
    let checkbox1 = document.getElementById('cetrekan5');
    let checkbox2 = document.getElementById('cetrekan6');

    let bohlam1 = document.getElementById('lampu5');
    let bohlam2 = document.getElementById('lampu6');

    if (checkbox1.checked) {
        bohlam1.src = "assets/images/on.gif";
    } else {
        bohlam1.src = "assets/images/off.gif";
    };
    if (checkbox2.checked) {
        bohlam2.src = "assets/images/on.gif";
    } else {
        bohlam2.src = "assets/images/off.gif";
    };
};

function saklarTamu() {
    let checkbox1 = document.getElementById('cetrekan7');
    let checkbox2 = document.getElementById('cetrekan8');
    let checkbox3 = document.getElementById('cetrekan9');
    let checkbox4 = document.getElementById('cetrekan10');

    let bohlam1 = document.getElementById('lampu7');
    let bohlam2 = document.getElementById('lampu8');
    let bohlam3 = document.getElementById('lampu9');
    let bohlam4 = document.getElementById('lampu10');

    if (checkbox1.checked) {
        bohlam1.src = "assets/images/on.gif";
    } else {
        bohlam1.src = "assets/images/off.gif";
    };
    if (checkbox2.checked) {
        bohlam2.src = "assets/images/on.gif";
    } else {
        bohlam2.src = "assets/images/off.gif";
    };
    if (checkbox3.checked) {
        bohlam3.src = "assets/images/on.gif";
    } else {
        bohlam3.src = "assets/images/off.gif";
    };
    if (checkbox4.checked) {
        bohlam4.src = "assets/images/on.gif";
    } else {
        bohlam4.src = "assets/images/off.gif";
    };
};


