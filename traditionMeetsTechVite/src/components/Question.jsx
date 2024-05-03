
export default function Question({ question, sezioneId }) {
    return (
        <div id={sezioneId} className='sezione'>
            <div className='question'>
                <div className="boxq">
                    <h3>Domanda</h3>
                    <p>{question}</p>
                </div>
            </div>
        </div>
    );
}