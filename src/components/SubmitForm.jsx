import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function SubmitForm(params) {
  const schema = yup.object().shape({
    name: yup.string().required('فیلد نام اجباری است'),
    email: yup.string().email().required(),
    age: yup.number().positive().min(18).max(100).required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "رمز عبور مطابقت ندارد")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="SubmitForm">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <input type="text" placeholder="Name..." {...register("name")} />
        {errors.name?.message && <p>{errors.name?.message}</p>}
        <input type="email" placeholder="Email..." {...register("email")} />
        {errors.email?.message && <p>{errors.email?.message}</p>}
        <input type="number" placeholder="Age..." {...register("age")} />
        {errors.age?.message && <p>{errors.age?.message}</p>}
        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password?.message}</p>}
        <input
          type="password"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <p>{errors.confirmPassword?.message}</p>
        )}

        <input type="submit" />
      </form>
    </div>
  );
}

export default SubmitForm;
