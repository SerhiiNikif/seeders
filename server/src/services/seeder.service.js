import bcrypt from 'bcrypt';

import UserModel from "../models/User.js";

const users = [
  { 
    "name": "Liam", 
    "password": "Liam", 
    "email": "liam@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Olivia", 
    "password": "Olivia", 
    "email": "olivia@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Noah", 
    "password": "Noah", 
    "email": "noah@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Emma", 
    "password": "Emma", 
    "email": "emma@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Oliver", 
    "password": "Oliver", 
    "email": "oliver@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Ava", 
    "password": "Ava", 
    "email": "ava@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Elijah", 
    "password": "Elijah", 
    "email": "elijah@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Charlotte", 
    "password": "Charlotte", 
    "email": "charlotte@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "William", 
    "password": "William", 
    "email": "william@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Sophia", 
    "password": "Sophia", 
    "email": "sophia@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "James", 
    "password": "James", 
    "email": "james@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Amelia", 
    "password": "Amelia", 
    "email": "amelia@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Benjamin", 
    "password": "Benjamin", 
    "email": "benjamin@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Mia", 
    "password": "Mia", 
    "email": "mia@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Lucas", 
    "password": "Lucas", 
    "email": "lucas@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Harper", 
    "password": "Harper", 
    "email": "harper@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Henry", 
    "password": "Henry", 
    "email": "henry@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Evelyn", 
    "password": "Evelyn", 
    "email": "evelyn@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Alexander", 
    "password": "Alexander", 
    "email": "alexander@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Abigail", 
    "password": "Abigail", 
    "email": "abigail@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Samuely", 
    "password": "Samuely", 
    "email": "samuely@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Ella", 
    "password": "Ella", 
    "email": "ella@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Jackson", 
    "password": "Jackson", 
    "email": "jackson@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Scarlett", 
    "password": "Scarlett", 
    "email": "scarlett@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Aiden", 
    "password": "Aiden", 
    "email": "aiden@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Madison", 
    "password": "Madison", 
    "email": "madison@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Sebastian", 
    "password": "Sebastian", 
    "email": "sebastian@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Lily", 
    "password": "Lily", 
    "email": "lily@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Mateo", 
    "password": "Mateo", 
    "email": "mateo@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Chloe", 
    "password": "Chloe", 
    "email": "chloe@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Grayson", 
    "password": "Grayson", 
    "email": "grayson@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Aria", 
    "password": "Aria", 
    "email": "aria@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Daniel", 
    "password": "Daniel", 
    "email": "daniel@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Grace", 
    "password": "Grace", 
    "email": "grace@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Matthew", 
    "password": "Matthew", 
    "email": "matthew@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Zoe", 
    "password": "Zoe", 
    "email": "zoe@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Carter", 
    "password": "Carter", 
    "email": "carter@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Riley", 
    "password": "Riley", 
    "email": "riley@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "David", 
    "password": "David", 
    "email": "david@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Layla", 
    "password": "Layla", 
    "email": "layla@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Joseph", 
    "password": "Joseph", 
    "email": "joseph@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Mila", 
    "password": "Mila", 
    "email": "mila@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Samuel", 
    "password": "Samuel", 
    "email": "samuel@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Emily", 
    "password": "Emily", 
    "email": "emily@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  },
  { 
    "name": "Owen", 
    "password": "Owen", 
    "email": "owen@gmail.com.com", 
    "avatar": "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais" 
  }
];

class SeederService {
  async insertData() {
    await UserModel.sync();

    const userArray = await Promise.all(users.map(async user => {
      const hashPassword = await bcrypt.hash(user.password, 3);
      return { ...user, password: hashPassword };
    }));
  
    const result = await UserModel.bulkCreate(userArray, {
      ignoreDuplicates: true,
      returning: true,
    });

    return {users: result.map((record) => record.get()), message: 'Data successfully inserted'}
  }
}

export default new SeederService();