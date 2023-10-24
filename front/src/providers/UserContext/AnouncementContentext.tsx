// import { ReactNode, createContext, useEffect, useState } from "react";
// import { api } from "../../services/api";

// interface AnouncementProviderProps {
//   children: ReactNode;
// }

// export interface IAnouncement {
//   id: number;
//   brand: string;
//   model: string;
//   year: string;
//   fuel: string;
//   mileage: number | string;
//   color: string;
//   fipePrice: number | string;
//   price: number | string;
//   description: string;
// }

// interface AnouncementContextValues {
//   anouncement: IAnouncement | null;
//   listAnouncement: IAnouncement[];
// }

// export const AnouncementContext = createContext<AnouncementContextValues>(
//   {} as AnouncementContextValues
// );

// export const AnouncementProvider = ({ children }: AnouncementProviderProps) => {
//   const [listAnouncement, setListAnouncement] = useState<IAnouncement[]>([]);
//   //   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const { data } = await api.get<IAnouncement[]>("/anouncement");
//       setListAnouncement(data);
//     })();
//   }, []);

//   //   const signIn = async (data: TLoginData) => {
//   //     try {
//   //       const response = await api.post("/login", data);

//   //       const { token } = response.data;

//   //       api.defaults.headers.common.Userorization = `Bearer ${token}`;
//   //       localStorage.setItem("user:token", token);

//   //       navigate("dashboard");
//   //     } catch (err) {
//   //       console.log(err);
//   //     }
//   //   };

//   //   const newUser = async (data: TRegisterData) => {
//   //     let body = {};
//   //     if (data.isAdvertiser === "true") {
//   //       const { city, state, number, complement, street, cep, ...rest } = data;
//   //       body = {
//   //         ...rest,
//   //         address: { city, state, number, complement, street, cep },
//   //         isAdvertiser: true,
//   //       };
//   //     } else {
//   //       const { city, state, number, complement, street, cep, ...rest } = data;
//   //       body = {
//   //         ...rest,
//   //         address: { city, state, number, complement, street, cep },
//   //         isAdvertiser: false,
//   //       };
//   //     }
//   //     try {
//   //       await api.post("/user", body);
//   //       navigate("login");
//   //     } catch (err) {
//   //       console.log(err);
//   //     }
//   //   };

//   //   const logout = () => {
//   //     localStorage.removeItem("@TOKEN");
//   //     navigate("/");
//   //   };

//   return (
//     <AnouncementContext.Provider value={{ listAnouncement }}>
//       {children}
//     </AnouncementContext.Provider>
//   );
// };
