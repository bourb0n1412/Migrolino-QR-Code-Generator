import React, {useState} from 'react';
import QRCode from 'qrcode.react';
import VideoPlayer from "./VideoPlayer";

function QRCodeGenerator() {
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');
    const [word3, setWord3] = useState('');
    const [word4, setWord4] = useState('');
    const [qrCodes, setQrCodes] = useState([]);

    const generateQRCode = () => {
        if (!word1 || !word2) {
            alert('Bitte füllen Sie alle Eingabefelder aus.');
            return;
        }

        const combinations = [
            `${word1}_${word2}`,
            `${word2}_${word1}`,
            `${word1}${word2}`,
            `${word2}${word1}`,

            `3 Wörter:`,
            `${word1}_${word2}_${word3}`,
            `${word1}_${word3}_${word2}`,
            `${word2}_${word1}_${word3}`,
            `${word2}_${word3}_${word1}`,
            `${word3}_${word1}_${word2}`,
            `${word3}_${word2}_${word1}`,
            `${word1}${word2}_${word3}`,
            `${word1}${word3}_${word2}`,
            `${word2}${word1}_${word3}`,
            `${word2}${word3}_${word1}`,
            `${word3}${word1}_${word2}`,
            `${word3}${word2}_${word1}`,
            `${word1}_${word2}${word3}`,
            `${word1}_${word3}${word2}`,
            `${word2}_${word1}${word3}`,
            `${word2}_${word3}${word1}`,
            `${word3}_${word1}${word2}`,
            `${word3}_${word2}${word1}`,

            `4 Wörter:`,
            `${word1}_${word2}_${word3}_${word4}`,
            `${word1}_${word2}_${word4}_${word3}`,
            `${word1}_${word3}_${word2}_${word4}`,
            `${word1}_${word3}_${word4}_${word2}`,
            `${word1}_${word4}_${word2}_${word3}`,
            `${word1}_${word4}_${word3}_${word2}`,
            `${word2}_${word1}_${word3}_${word4}`,
            `${word2}_${word1}_${word4}_${word3}`,
            `${word2}_${word3}_${word1}_${word4}`,
            `${word2}_${word3}_${word4}_${word1}`,
            `${word2}_${word4}_${word1}_${word3}`,
            `${word2}_${word4}_${word3}_${word1}`,
            `${word3}_${word1}_${word2}_${word4}`,
            `${word3}_${word1}_${word4}_${word2}`,
            `${word3}_${word2}_${word1}_${word4}`,
            `${word3}_${word2}_${word4}_${word1}`,
            `${word3}_${word4}_${word1}_${word2}`,
            `${word3}_${word4}_${word2}_${word1}`,
            `${word4}_${word1}_${word2}_${word3}`,
            `${word4}_${word1}_${word3}_${word2}`,
            `${word4}_${word2}_${word1}_${word3}`,
            `${word4}_${word2}_${word3}_${word1}`,
            `${word4}_${word3}_${word1}_${word2}`,
            `${word4}_${word3}_${word2}_${word1}`,

            `${word1}${word2}_${word3}_${word4}`,
            `${word1}${word2}_${word4}_${word3}`,
            `${word1}${word3}_${word2}_${word4}`,
            `${word1}${word3}_${word4}_${word2}`,
            `${word1}${word4}_${word2}_${word3}`,
            `${word1}${word4}_${word3}_${word2}`,
            `${word2}${word1}_${word3}_${word4}`,
            `${word2}${word1}_${word4}_${word3}`,
            `${word2}${word3}_${word1}_${word4}`,
            `${word2}${word3}_${word4}_${word1}`,
            `${word2}${word4}_${word1}_${word3}`,
            `${word2}${word4}_${word3}_${word1}`,
            `${word3}${word1}_${word2}_${word4}`,
            `${word3}${word1}_${word4}_${word2}`,
            `${word3}${word2}_${word1}_${word4}`,
            `${word3}${word2}_${word4}_${word1}`,
            `${word3}${word4}_${word1}_${word2}`,
            `${word3}${word4}_${word2}_${word1}`,
            `${word4}${word1}_${word2}_${word3}`,
            `${word4}${word1}_${word3}_${word2}`,
            `${word4}${word2}_${word1}_${word3}`,
            `${word4}${word2}_${word3}_${word1}`,
            `${word4}${word3}_${word1}_${word2}`,
            `${word4}${word3}_${word2}_${word1}`,

            `${word1}_${word2}${word3}_${word4}`,
            `${word1}_${word2}${word4}_${word3}`,
            `${word1}_${word3}${word2}_${word4}`,
            `${word1}_${word3}${word4}_${word2}`,
            `${word1}_${word4}${word2}_${word3}`,
            `${word1}_${word4}${word3}_${word2}`,
            `${word2}_${word1}${word3}_${word4}`,
            `${word2}_${word1}${word4}_${word3}`,
            `${word2}_${word3}${word1}_${word4}`,
            `${word2}_${word3}${word4}_${word1}`,
            `${word2}_${word4}${word1}_${word3}`,
            `${word2}_${word4}${word3}_${word1}`,
            `${word3}_${word1}${word2}_${word4}`,
            `${word3}_${word1}${word4}_${word2}`,
            `${word3}_${word2}${word1}_${word4}`,
            `${word3}_${word2}${word4}_${word1}`,
            `${word3}_${word4}${word1}_${word2}`,
            `${word3}_${word4}${word2}_${word1}`,
            `${word4}_${word1}${word2}_${word3}`,
            `${word4}_${word1}${word3}_${word2}`,
            `${word4}_${word2}${word1}_${word3}`,
            `${word4}_${word2}${word3}_${word1}`,
            `${word4}_${word3}${word1}_${word2}`,
            `${word4}_${word3}${word2}_${word1}`,

            `${word1}_${word2}_${word3}${word4}`,
            `${word1}_${word2}_${word4}${word3}`,
            `${word1}_${word3}_${word2}${word4}`,
            `${word1}_${word3}_${word4}${word2}`,
            `${word1}_${word4}_${word2}${word3}`,
            `${word1}_${word4}_${word3}${word2}`,
            `${word2}_${word1}_${word3}${word4}`,
            `${word2}_${word1}_${word4}${word3}`,
            `${word2}_${word3}_${word1}${word4}`,
            `${word2}_${word3}_${word4}${word1}`,
            `${word2}_${word4}_${word1}${word3}`,
            `${word2}_${word4}_${word3}${word1}`,
            `${word3}_${word1}_${word2}${word4}`,
            `${word3}_${word1}_${word4}${word2}`,
            `${word3}_${word2}_${word1}${word4}`,
            `${word3}_${word2}_${word4}${word1}`,
            `${word3}_${word4}_${word1}${word2}`,
            `${word3}_${word4}_${word2}${word1}`,
            `${word4}_${word1}_${word2}${word3}`,
            `${word4}_${word1}_${word3}${word2}`,
            `${word4}_${word2}_${word1}${word3}`,
            `${word4}_${word2}_${word3}${word1}`,
            `${word4}_${word3}_${word1}${word2}`,
            `${word4}_${word3}_${word2}${word1}`,

            `${word1}_${word2}${word3}${word4}`,
            `${word1}_${word2}${word4}${word3}`,
            `${word1}_${word3}${word2}${word4}`,
            `${word1}_${word3}${word4}${word2}`,
            `${word1}_${word4}${word2}${word3}`,
            `${word1}_${word4}${word3}${word2}`,
            `${word2}_${word1}${word3}${word4}`,
            `${word2}_${word1}${word4}${word3}`,
            `${word2}_${word3}${word1}${word4}`,
            `${word2}_${word3}${word4}${word1}`,
            `${word2}_${word4}${word1}${word3}`,
            `${word2}_${word4}${word3}${word1}`,
            `${word3}_${word1}${word2}${word4}`,
            `${word3}_${word1}${word4}${word2}`,
            `${word3}_${word2}${word1}${word4}`,
            `${word3}_${word2}${word4}${word1}`,
            `${word3}_${word4}${word1}${word2}`,
            `${word3}_${word4}${word2}${word1}`,
            `${word4}_${word1}${word2}${word3}`,
            `${word4}_${word1}${word3}${word2}`,
            `${word4}_${word2}${word1}${word3}`,
            `${word4}_${word2}${word3}${word1}`,
            `${word4}_${word3}${word1}${word2}`,
            `${word4}_${word3}${word2}${word1}`,

            `${word1}${word2}_${word3}${word4}`,
            `${word1}${word2}_${word4}${word3}`,
            `${word1}${word3}_${word2}${word4}`,
            `${word1}${word3}_${word4}${word2}`,
            `${word1}${word4}_${word2}${word3}`,
            `${word1}${word4}_${word3}${word2}`,
            `${word2}${word1}_${word3}${word4}`,
            `${word2}${word1}_${word4}${word3}`,
            `${word2}${word3}_${word1}${word4}`,
            `${word2}${word3}_${word4}${word1}`,
            `${word2}${word4}_${word1}${word3}`,
            `${word2}${word4}_${word3}${word1}`,
            `${word3}${word1}_${word2}${word4}`,
            `${word3}${word1}_${word4}${word2}`,
            `${word3}${word2}_${word1}${word4}`,
            `${word3}${word2}_${word4}${word1}`,
            `${word3}${word4}_${word1}${word2}`,
            `${word3}${word4}_${word2}${word1}`,
            `${word4}${word1}_${word2}${word3}`,
            `${word4}${word1}_${word3}${word2}`,
            `${word4}${word2}_${word1}${word3}`,
            `${word4}${word2}_${word3}${word1}`,
            `${word4}${word3}_${word1}${word2}`,
            `${word4}${word3}_${word2}${word1}`,

            `${word1}${word2}${word3}_${word4}`,
            `${word1}${word2}${word4}_${word3}`,
            `${word1}${word3}${word2}_${word4}`,
            `${word1}${word3}${word4}_${word2}`,
            `${word1}${word4}${word2}_${word3}`,
            `${word1}${word4}${word3}_${word2}`,
            `${word2}${word1}${word3}_${word4}`,
            `${word2}${word1}${word4}_${word3}`,
            `${word2}${word3}${word1}_${word4}`,
            `${word2}${word3}${word4}_${word1}`,
            `${word2}${word4}${word1}_${word3}`,
            `${word2}${word4}${word3}_${word1}`,
            `${word3}${word1}${word2}_${word4}`,
            `${word3}${word1}${word4}_${word2}`,
            `${word3}${word2}${word1}_${word4}`,
            `${word3}${word2}${word4}_${word1}`,
            `${word3}${word4}${word1}_${word2}`,
            `${word3}${word4}${word2}_${word1}`,
            `${word4}${word1}${word2}_${word3}`,
            `${word4}${word1}${word3}_${word2}`,
            `${word4}${word2}${word1}_${word3}`,
            `${word4}${word2}${word3}_${word1}`,
            `${word4}${word3}${word1}_${word2}`,
            `${word4}${word3}${word2}_${word1}`,

            `${word1}${word2}${word3}${word4}`,
            `${word1}${word2}${word4}${word3}`,
            `${word1}${word3}${word2}${word4}`,
            `${word1}${word3}${word4}${word2}`,
            `${word1}${word4}${word2}${word3}`,
            `${word1}${word4}${word3}${word2}`,
            `${word2}${word1}${word3}${word4}`,
            `${word2}${word1}${word4}${word3}`,
            `${word2}${word3}${word1}${word4}`,
            `${word2}${word3}${word4}${word1}`,
            `${word2}${word4}${word1}${word3}`,
            `${word2}${word4}${word3}${word1}`,
            `${word3}${word1}${word2}${word4}`,
            `${word3}${word1}${word4}${word2}`,
            `${word3}${word2}${word1}${word4}`,
            `${word3}${word2}${word4}${word1}`,
            `${word3}${word4}${word1}${word2}`,
            `${word3}${word4}${word2}${word1}`,
            `${word4}${word1}${word2}${word3}`,
            `${word4}${word1}${word3}${word2}`,
            `${word4}${word2}${word1}${word3}`,
            `${word4}${word2}${word3}${word1}`,
            `${word4}${word3}${word1}${word2}`,
            `${word4}${word3}${word2}${word1}`,
        ];

        setQrCodes(combinations);
    };

    return (
        <body id="top" class="preview" data-spy="scroll" data-target=".subnav" data-offset="80">

        <div className={"container"}>
            <div class={"row"}>
                <div className={"span6"}>
                    <h1><img src={require("./img/ani.gif")}/><font color="#FF0000">Q</font><font
                        color="#FF5A00">R</font><font
                        color="#FFB400">-</font><font
                        color="#FFff00">C</font><font color="#A5ff00">o</font><font color="#4Bff00">d</font><font
                        color="#00ff00">e</font><font color="#00ff5A"> </font>
                        <blink><font color="#00ffB4">G</font><font color="#00ffff">e</font><font
                            color="#00B4ff">n</font><font
                            color="#005Aff">e</font><font color="#0000ff">r</font><font color="#4B00ff">a</font><font
                            color="#A500ff">t</font><font color="#FF00ff">o</font><font color="#FF00B4">r</font></blink>
                    </h1>
                    <p className="lead">Created by bourb0n1412 aka the best CSGO player in SWITZERLAND aka Heikoooo</p>
                    <marquee>
                        I have to update my understanding on a fundamental level!!!
                        My Achievements:
                        IN 2021: -02.02.2021 FACEIT LEVEL 10 | -5th-8th place at SwitzerLAN 2021 w/ 20:40 am morge
                        (IMNASA, Jonas2Good, Birb, Zeptrion) | -2nd place at Red Bull Flick SwitzerLAN Edition CS:GO 2v2
                        w/ Birb | -2nd place at Digitec Playground Vol. 5 w/GRING Elektrosport | -2nd place at
                        SEL Fall Season 2021 w/ Insanium Horizon(IMNASA, Jonas2Good, Ritter, SIXAER) | -3rd place at SEL
                        HEADSHOT ONLY 1V1 MAYHEM

                        IN 2022:
                        -6th place, qualified for SEL Elite Division w/Scythe of Seraph
                        -1st place SEL Challenger Div. w/cringerunners

                        "Nando Benched" - Jonas♿Good, 2021
                        "he troll since round 1 and lost face" - Jonasss, 2021
                        "Wötsch mi nüssle" - birb, 2021

                    </marquee>
                </div>

                <div className={"span6"}>
                    <center>
                        <VideoPlayer/>
                    </center>
                </div>
            </div>
            <div id={"forms"}>
                <div className={"page-header"}><h1>言葉を選んでください (^з^)-☆Chu!!</h1></div>
                <div1 className={"well"}>
                    <input
                        type="text"
                        placeholder="Wort 1"
                        value={word1}
                        onChange={(e) => setWord1(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Wort 2"
                        value={word2}
                        onChange={(e) => setWord2(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Wort 3"
                        value={word3}
                        onChange={(e) => setWord3(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Wort 4"
                        value={word4}
                        onChange={(e) => setWord4(e.target.value)}
                    />
                    <img src={require("./img/steve.gif")}/>
                    <button type="button" className={"btn btn-primary"} onClick={generateQRCode}>QR-Codes generieren
                    </button>
                </div1>

                <div className="row">
                    {qrCodes.map((code, index) => (
                        <div key={index} className={"span2"}>
                            <br/>
                            <QRCode value={code}/>
                            <p>{code}</p>
                        </div>
                    ))}
                </div>
                <center>
                    <h3 id="alerts">BITTE NICHT MISSBRAUCHEN!!!</h3>
                    <div className="row">
                        <div className="span12">
                            <div className="alert alert-block">
                                <a className="close">×</a>
                                <img className="pull-left" src={require("./img/drudgesiren.gif")}
                                     width="80"/>
                                <h4 className="alert-heading">Bitte beachten:</h4>
                                <p> Dieses Programm dient ausschliesslich Projektzwecken und sollte nicht missbraucht
                                    werden. Es ist strengstens untersagt, versuchen, gratis Artikel von Migrolino oder
                                    anderen Geschäften zu erhalten, ohne die erforderlichen Zahlungen zu leisten.
                                    Jeglicher Missbrauch dieses Programms für betrügerische Aktivitäten ist illegal und
                                    ethisch inakzeptabel. Bitte nutzen Sie diese Anwendung verantwortungsbewusst und
                                    respektieren Sie die Gesetze und Rechte anderer.</p>
                            </div>
                        </div>
                    </div>
                </center>

            </div>
        </div>

        </body>
    );
}

export default QRCodeGenerator;
