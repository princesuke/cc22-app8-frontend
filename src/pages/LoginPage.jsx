import { useForm } from "react-hook-form";
import styles from "../styles/LoginPage.module.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../stores/useAuthStore";
import { useNavigate } from "react-router";

const loginSchema = z.object({
  email: z.string().min(1, "กรุณากรอกอีเมล").email("อีเมลไม่ถูกต้อง"),
  password: z.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
});

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  //   console.log(errors)

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      await login(data.email, data.password);
      alert("Login Success!");
      navigate("/");
    } catch {
      alert("Login Failed!");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formCard}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            {...register("email")}
            className={`${styles.input} ${
              errors.email ? styles.inputError : styles.inputSuccess
            }
            `}
            placeholder="example@mail.com"
          />
          {errors.email && (
            <span className={styles.errorText}>{errors.email.message}</span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input
            {...register("password")}
            className={`${styles.input} ${
              errors.password ? styles.inputError : styles.inputSuccess
            }
            `}
            type="password"
            placeholder="********"
          />
          {errors.password && (
            <span className={styles.errorText}>{errors.password.message}</span>
          )}
        </div>
        <button className={styles.submitButton} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
