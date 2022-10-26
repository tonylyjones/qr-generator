import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';
//@ts-ignore
import canvasToImage from 'canvas-to-image';

function App() {
  const [url, setUrl] = useState('');
  const [size, setSize] = useState(300);

  const handleSave = () => {
    canvasToImage('react-qrcode-logo', {
      name: 'qr-code_' + url,
      type: 'png',
      quality: 1,
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 960,
        margin: '24px auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <QRCode
          value={url}
          style={{
            background: 'white',
          }}
          size={Math.max(Math.min(size, 700), 300)}
          quietZone={2}
        />
      </div>
      <div
        style={{
          width: 320,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form className='pure-form pure-form-stacked'>
          <div>
            <label>URL</label>
            <input
              type='text'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div style={{ marginTop: 16 }}>
            <label>Taille</label>
            <input
              type='number'
              value={size}
              onChange={(e) => {
                if (!isNaN(Number(e.target.value))) {
                  setSize(Number(e.target.value));
                }
              }}
            />
          </div>
          <div style={{ marginTop: 16 }}>
            <button onClick={handleSave} disabled={!Boolean(url)}>
              Download
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
