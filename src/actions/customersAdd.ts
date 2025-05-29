"use server";

import { getClient } from "@/gql/apollo-client";
// import { customersAddMutation } from "@/gql/mutations/customerAdd";
import { TVisitorRegistrationSchema } from "@/lib/validators/visitorRegistrationSchema";

export const customersAdd = async (values: TVisitorRegistrationSchema) => {
  // try {
  //   const { data } = await getClient().mutate({
  //     mutation: customersAddMutation,
  //     variables: {
  //       isSubscribed: "Yes",
  //       firstName: values.firstName,
  //       lastName: values.lastName,
  //       middleName: "Visitor",
  //       emailValidationStatus: "unknown",
  //       phoneValidationStatus: "unknown",
  //       emails: [values.email],
  //       state: "customer",
  //       position: values.jobTitle,
  //     },
  //   });

  //   return data;
  // } catch (error) {
  //   throw new Error("Something went wrong");
  // }
};
