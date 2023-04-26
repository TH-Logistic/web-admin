enum StaffStatus {
    New = 1,
    Active = 2,
    Suspended = 3,
    Resigned = 4,
    Deleted = 5
}
const enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

const enum StaffRole {
    DRIVER = 'driver',
    ADMIN = 'admin'
}


class Staff {
    id: string;
    username: string;
    gender: Gender;
    phoneNumber: string;
    bankAccount: string;
    bankName: string;
    name: string;
    email: string;
    role: Staff;
    avatar: string;
    birthday: number;

    constructor(
        id: string,
        username: string,
        gender: Gender,
        phoneNumber: string,
        bankAccount: string,
        bankName: string,
        name: string,
        email: string,
        role: Staff,
        avatar: string,
        birthday: number
    ) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.bankAccount = bankAccount;
        this.bankName = bankName;
        this.role = role;
        this.avatar = avatar;
        this.birthday = birthday
    }
}

export { StaffStatus, Gender, Staff, StaffRole };
