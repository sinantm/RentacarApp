import { IsStatus } from "components/IsAccountStatus";

export interface AccountPropsTypes {
  accountId: string;
  name: string;
  surName: string;
  email: string;
  password: string;
  isStatus: IsStatus;
  carIsAdd: boolean;
  admin: boolean;
}

const Account: Array<AccountPropsTypes> = [
  {
    accountId: "1",
    name: "Sinan",
    surName: "Temel",
    email: "sinan_tml@hotmail.com",
    password: "1234",
    isStatus: IsStatus.Aktif,
    carIsAdd: true,
    admin: true,
  },
  {
    accountId: "2",
    name: "Aslı",
    surName: "Kaya",
    email: "aslıkaya@hotmail.com",
    password: "1234",
    isStatus: IsStatus.Pasif,
    carIsAdd: false,
    admin: false,
  },
  {
    accountId: "3",
    name: "Yasemin",
    surName: "Güneş",
    email: "yasemingunes@hotmail.com",
    password: "1234",
    isStatus: IsStatus.Silinmis,
    carIsAdd: false,
    admin: false,
  },
];
export default Account;
