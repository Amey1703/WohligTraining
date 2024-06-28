
// newInt8Array(length(bytes) | buffer | TypedArray)
// array of 8-bit integers

let buffer = new ArrayBuffer(16)

let v1 = new DataView(buffer)

let v2 = new DataView(buffer, 10, 3)

v1.setInt8(11, 42)

let num = v2.getInt8(1)
console.log(num);