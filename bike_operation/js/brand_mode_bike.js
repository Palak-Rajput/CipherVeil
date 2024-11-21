
var data = {
    brands: [
        {
            brand: "TVS",
            models: ['Star City', 'Apache RTR', 'Phoenix Disc', 'Sport 100cc', 'Apache 150cc',
                'Star Sport', 'Apache RR310', 'Victor 110cc', 'Suzuki Shogun', 'Flame 125cc',
                'Fiero 150cc', 'Jive 110cc', 'Radeon 110cc', 'Star 100cc', 'Victor GX',
                'Sports plus', 'Phoenix 125cc', 'MAX 4R',],
        },
        {
            brand: "Enfield",
            models: ['Enfield Classic', 'Enfield Thunderbird', 'Enfield Bullet',
                'Enfield\u200e Bullet', 'Enfield Interceptor', 'Enfield Himalayan',
                'Enfield Electra', 'Enfield Standard', 'Enfield Continental',
                'Enfield Machismo',],
        },
        {
            brand: "Triumph",
            models: ['Daytona 675R', 'Street Triple', 'Speed Triple', , 'Tiger 800',
                'Thunderbird Storm', 'Street Twin', 'Bonneville T100', 'Thruxton R',
                'Daytona 675',],
        },
        {
            brand: "Yamaha",
            models: ['FZ S', 'FZs 150cc', 'YZF-R15 2.0', 'FZ25 250cc', 'FZ V', 'FZ 150cc',
                'SZ 150cc', 'FZ25 ABS', 'FZ16 150cc', 'YZF-R15 S', 'YZF R6', 'YZF-R15 V3',
                'Fazer 150cc', 'Gladiator 125cc', 'SZ-RR 150cc', 'Saluto 125cc', 'Fazer 25',
                'YZF-R3 320cc', 'YZF-R15 150cc', 'YZF-R1 1000cc', 'SZR 150cc', 'FZS FI',
                'SZ RR', 'Fazer FI', 'MT-15 150cc', 'YZF-R1M 1000cc', 'RX135 135cc',
                'Fazer25 250cc', 'SZX 150cc', 'SS 125', 'YBR 110cc', 'Crux 110cc', 'Saluto RX',
                'FZ Fi', 'SZS 150cc', 'Saluto 125cc-Special', 'RX-Z 135cc', 'Libero G5'],
        },
        {
            brand: "Honda",
            models: ['CB Hornet', 'CBF Stunner', 'X-Blade 160CC', 'CB Unicorn', 'CBR 150R',
                'CB Shine', 'Dream Yuga', 'CBR 250R', 'CB ShineSP', 'X-Blade 160cc',
                'Livo 110cc', 'CB Twister', 'Dream Neo', 'CB Trigger', 'Livo Disc', 'CBR650R',
                'CD 110', 'CBR1000RR Fireblade', 'SP125 Disc', 'CB 1000R', 'CBR 600RR',
                'CBR 650',],
        },
        {
            brand: "Hero",
            models: ['Splendor Plus', 'Splendor iSmart', 'Super Splendor', 'Hunk 150cc',
                'CD Deluxe', 'Karizma ZMR', 'Splendor plus', 'Passion Pro', 'Karizma 223cc',
                'Splendor 100cc', 'Karizma R', 'HF Deluxe', 'Xpulse 200T', 'Passion Xpro',
                'Achiever 150cc', 'Ignitor Disc', 'Glamour Disc', 'HF Dawn', 'Glamour 125cc',
                'Xtreme 200R', 'CD Dawn', 'Passion 100cc', 'Passion Plus', 'CBZ 150cc',
                'CBZ Xtreme', 'Honda Splendor', 'Ignitor 125cc', 'Splendor NXG',
                'Achiever Disc', 'Xtreme 150cc', 'Splendor Pro', 'CD 100SS', 'Xpulse 200cc',
                'Xtreme Sports', 'Glamour i3s', 'Splendor+ 100cc', 'Passion XPRO', 'CBZ Star',
                'Passion PRO', 'Honda Ambition', 'Glamour PGM', 'Glamour Fi', 'i Smart',
                'Karizma 223', 'Ambition 135cc', 'Hunk Rear'],
        },
        {
            brand: "Bajaj",
            models: ['Pulsar NS200', 'Discover 100M', 'Discover 125M', 'Pulsar RS200', 'Pulsar 150cc', 'Avenger 220cc', 'Avenger Street', 'Avenger Cruise', 'Pulsar 220cc', 'Platina 125cc', 'Pulsar 180cc', 'CT 100', 'Pulsar 135LS', 'Pulsar 220F', 'V15 150cc', 'Discover 150cc', 'Pulsar NS', 'Dominar 400', 'Discover 125ST', 'Platina 100cc', 'Platina', 'Pulsar AS200', 'Discover 150F', 'V12 125cc', 'Pulsar 125cc', 'Pulsar AS150', 'Pulsar NS160', 'Discover 135cc', 'Discover 125cc', 'Boxer BM150', 'Discover 100cc', 'Pulsar 200cc', 'Pulsar 200', 'Boxer CT100', 'Discover 110cc', 'Discover 100T', 'Pulsar', 'Pulsar', 'Platina 110', 'XCD 125', 'CT110 ES', 'Discover150 150cc', 'Discover 125T', 'Platina Alloy', 'Boxer AT100', 'Discover 150S', 'Avenger 200cc', 'XCD 135', 'Avenger 150cc', 'Avenger 180cc', 'Discover150S 150cc'],
        },
        {
            brand: "Suzuki",
            models: ['Gixxer SF', 'Gixxer 150cc', 'Gixxer Fi', 'Hayabusa 1300cc', 'Intruder 150cc', 'Slingshot Plus', 'Intruder SP', 'GS 150', 'V-Strom 1000cc', 'Hayate 110cc', 'GSX-S750', 'GSX-R 1000cc', 'Heat 125cc', 'Hayate EP', 'Zeus 125cc'],
        },
        {
            brand: "Benelli",
            models: ['302R 300CC', 'TNT 600i', 'TNT 300', 'TNT 899', 'TNT R', 'TNT 600', 'TNT 25', '302R', 'TRK 502X'],
        },
        {
            brand: "Porsche",
            models: [
                "718 Boxster",
                "Cayenne Turbo",
            ],
        },
        {
            brand: "KTM",
            models: ['RC 390cc', 'Duke 200cc', 'RC 200cc', 'Duke 250cc', 'Duke 390cc', 'Duke 125cc', 'RC 125CC'],
        },
    ],
};

window.onload = function () {
    const selectState = document.getElementById("brand");
    const selectDistrict = document.getElementById("model");
    selectDistrict.disabled = true;

    //Add State Value to State Select option
    data.brands.forEach((value) => {
        selectState.appendChild(createOption(value.brand, value.brand));
    });

    selectState.addEventListener("change", function (e) {
        selectDistrict.disabled = false;
        data.brands.forEach((detail, index) => {
            //console.log(data.brands[index].models);
            if (detail.brand == e.target.value) {
                selectDistrict.innerHTML = "";
                selectDistrict.append(createOption("Select Model", ""));
                data.brands[index].models.forEach((district) => {
                    selectDistrict.append(createOption(district, district));
                });
            }
        });
    });

    //Create New Option Tag With Value
    function createOption(displayMember, valueMember) {
        const newOption = document.createElement("option");
        newOption.value = valueMember;
        newOption.text = displayMember;
        return newOption;
    }
};