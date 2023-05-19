enum StaffStatus {
    New = 1,
    Active = 2,
    Suspended = 3,
    Resigned = 4,
    Deleted = 5
}
const mapStaffStatusStringToEnum = (status: string) => {
    switch (status.toLowerCase()) {
        case "new":
            return StaffStatus.New;
        case "active":
            return StaffStatus.Active;
        case "suspended":
            return StaffStatus.Suspended;
        case "resigned":
            return StaffStatus.Resigned;
        case "deleted":
            return StaffStatus.Deleted;
        default:
            return StaffStatus.New;
    }
}

enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

const enum StaffRole {
    DRIVER = 'driver',
    ADMIN = 'admin'
}


class Staff {
    public id: string;
    public username: string;
    public gender: Gender;
    public phoneNumber: string;
    public bankAccount: string;
    public bankName: string;
    public name: string;
    public email: string;
    public role: StaffRole;
    public avatar: string;
    public birthday: number;
    public status: StaffStatus;

    constructor(
        id: string,
        username: string,
        gender: Gender,
        phoneNumber: string,
        bankAccount: string,
        bankName: string,
        name: string,
        email: string,
        role: StaffRole,
        avatar: string,
        birthday: number,
        status: string,
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
        this.birthday = birthday;
        this.status = mapStaffStatusStringToEnum(status);
    }
}

export { StaffStatus, Gender, Staff, StaffRole, mapStaffStatusStringToEnum };
