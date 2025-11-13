//Array Destructuring
// bai 1
function getFirstLast(array) {
  if (array.length === 0) return [];
  return [array[0], array[array.length - 1]];
}
console.log(getFirstLast([1, 2, 3, 4]));

// bai 2
function swapElements(arr) {
  if (arr.length < 4) return arr;

  let temp = arr[1];
  arr[1] = arr[3];
  arr[3] = temp;

  return arr;
}

console.log(swapElements([1, 2, 3, 4, 5]));

// Bài tập Object Destructuring
// bai 1
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
  const {
    name,
    contact: { email },
  } = user.personalInfo;
  return { name, email };
}

console.log(getUserInfo(user));

// bai 2
function createProduct({ name, price, category = "general", inStock = true }) {
  return { name, price, category, inStock };
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);

// Bài tập Promises
// Bai 1
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(2000).then(() => console.log("sau 2 giây "));

// bai 2

async function fetchMultipleData(urls) {
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((res) => res.json()));
    return data;
  } catch (error) {
    console.error("Lỗi khi fetch dữ liệu:", error);
    throw error;
  }
}

// Bài tập Async/Await

//Bai 1
async function processOrder(orderId) {
  try {
    const order = await getOrder(orderId);
    const user = await getUser(order.userId);
    const products = await getProducts(order.productIds);

    return { order, user, products };
  } catch (error) {
    console.error("Lỗi khi sử lý đơn hàng:", error);
    throw error;
  }
}

//Bai 2
async function safeApiCall(apiFunction, ...args) {
  try {
    const result = await apiFunction(...args);
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message || String(error) };
  }
}
