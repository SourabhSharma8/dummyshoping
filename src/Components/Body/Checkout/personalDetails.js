import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SaveOrderAction } from "../../../Redux/Actions/Order";
import { useNavigate } from "react-router-dom";

const PersonalDetails = ({ orderData, total }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      name: `${data.fname}  ${data.lname}`,
      email: data.email,
      phone: data.phone,
      total: total,
      orderData,
    };
    dispatch(SaveOrderAction(payload));
    navigate("/review");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <Controller
          name="fname"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <input
              className="form-control"
              placeholder="Enter first name"
              {...field}
            />
          )}
        />
        {errors?.fname && <p className="text-danger">Please fill the field</p>}
      </div>

      <div className="mb-3">
        <Controller
          name="lname"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <input
              className="form-control"
              placeholder="Enter last name"
              {...field}
            />
          )}
        />
        {errors?.lname && <p className="text-danger">Please fill the field</p>}
      </div>

      <div className="mb-3">
        <Controller
          name="email"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              {...field}
            />
          )}
        />
        {errors?.email && <p className="text-danger">Please fill the field</p>}
      </div>

      <div className="mb-3">
        <Controller
          name="phone"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <input
              type="number"
              className="form-control"
              placeholder="Enter phone"
              {...field}
            />
          )}
        />
        {errors?.phone && <p className="text-danger">Please fill the field</p>}
      </div>

      <button type="submit" className="btn btn-primary text-white ps-5 pe-5 ">
        Review and Submit
      </button>
    </form>
  );
};
export default PersonalDetails;
