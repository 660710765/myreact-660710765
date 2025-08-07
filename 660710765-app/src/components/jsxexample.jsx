import React, { use } from "react";
function JsxExamples() {
    const greeting = <h1>Hello, React with jsx</h1>
    const name = "ปราบฎา";
    const age = 25;
    const currentYear = new Date().getFullYear();
    const user={
        firstName: 'ปราบฎา',
        lastName: 'เปลี่ยนน่วม',
        age: 20,
        hobbies: ['อ่านหนังสือ', 'เล่นกีฬา', 'เล่นเกม'],
    };
    const formatName = (name) => {
        return `${user.firstName} ${user.lastName}`;
    }
    const isLoggedIn = true;
    const hasNotification = 3;

    return(
        <div className="jsx-examples"style={{background:'#10d2f5ff'}} >
            <h1>JsxExamples</h1>
            <section>
                <h2>การแสดงข้อมูล</h2>
                (greeting)
                <p>สวัสดีคุณ {name}อายุ{age}</p>
                <p>นี่คือปี {currentYear}</p>
                <p>ขื่อจริง {formatName(user)}</p>
            </section>
            <section>
                <h2>Attributes ใน jsx</h2>
                <div className="Card">
                    <p className="text-primary">ใช้ className แทน Class</p>
                </div>
                <button onClick={()=> alert('กดทำไม')} onMouseEnter={()=> console.log('Mouse Entered!')}>
                    hover me or click me
                </button>
                <div style={{
                    backgroundColor: '#E8F4E8',
                    padding:'15px',
                    borderRadius: '8px',
                    marginTop: '10px'
                }}>
                    <p style={{color:'#2D4A2B',fontWeight:'bold'}}>inline styles ใช้ object</p>
                </div>
            </section>

            <section>
                <h2>🔀 Conditional Rendering</h2>
                
                {/* ใช้ ternary operator */}
                <p>
                    สถานะ: {isLoggedIn ? '✅ ล็อกอินแล้ว' : '❌ ยังไม่ได้ล็อกอิน'}
                </p>
                
                {/* ใช้ && operator */}
                {hasNotification > 0 && (
                    <div className="notification">
                        🔔 คุณมี {hasNotification} การแจ้งเตือนใหม่
                    </div>
                )}
                
                {/* ใช้ if-else ผ่าน function */}
                {(() => {
                    if (user.age >= 18) {
                        return <p>✅ {formatName(user)} โตแล้วค้าบบบ</p>;
                    } else {
                        return <p>👶 {formatName(user)} ยังเด็กยังเล็ก</p>;
                    }
                })()}
            </section>
            <section>
                <h2>📋 การแสดงผล Lists</h2>
                <h3>งานอดิเรกของ {user.firstName}:</h3>
                <ul>
                    {user.hobbies.map((hobby, index) => (
                        <li key={index}>
                            {index + 1}. {hobby}
                        </li>
                    ))}
                </ul>
                
                {/* ตัวอย่างที่ซับซ้อนขึ้น */}
                <div className="product-list">
                    <h3>รายการสินค้า</h3>
                    {[
                        { id: 1, name: 'ข้าวมันไก่', price: 42, inStock: true },
                        { id: 2, name: 'ข้าวขาหมู', price: 59, inStock: true },
                        { id: 3, name: 'กะเพราไก่', price: 39, inStock: false }
                    ].map(product => (
                        <div key={product.id} className="product-item">
                            <span>{product.name}</span>
                            <span> - ฿{product.price.toLocaleString()}</span>
                            <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                                {product.inStock ? ' ✅ มีสินค้า' : ' ❌ สินค้าหมด'}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2>🧩 React Fragment</h2>
                <p>ใช้เมื่อไม่ต้องการ wrapper element:</p>
                {/* Fragment แบบเต็ม */}
                <React.Fragment>
                    <h3>หัวข้อ</h3>
                    <p>เนื้อหา</p>
                </React.Fragment>
                
                {/* Fragment แบบย่อ */}
                <>
                    <h3>หัวข้ออื่น</h3>
                    <p>เนื้อหาอื่น</p>
                </>
            </section>
            <section>
                <h2>🎯 Event Handling ใน JSX</h2>
                <input 
                    type="text" 
                    placeholder="พิมพ์อะไรก็ได้..."
                    onChange={(e) => console.log('พิมพ์:', e.target.value)}
                />
                
                <select onChange={(e) => alert(`เลือก: ${e.target.value}`)}>
                    <option value="">-- เลือกภาษา --</option>
                    <option value="js">JavaScript</option>
                    <option value="py">Python</option>
                    <option value="java">Java</option>
                    <option value="go">Go</option>
                </select>
            </section>
            <section>
                <h2>💬 Comments ใน JSX</h2>
                {/* นี่คือ comment ใน JSX */}
                <p>Comment ใน JSX ต้องอยู่ใน {/* curly braces */}</p>
                {
                    // นี่ก็เป็น comment เช่นกัน
                    // แต่อยู่ใน JavaScript expression
                }
            </section>
        </div>
    )
}
export default  JsxExamples;