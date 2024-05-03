
export default function Answer({ answer, sezioneId }) {
    return (
        <div id={sezioneId} className='sezione'>
            <div className='answer'>
                <div className="boxa">
                    <h3>Risposta</h3>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
}