import { Title } from "../../componenets/title";
import { InputBlock } from "../../componenets/input/InputBlock";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../componenets/input/Input";
import IconVisible from "../../assets/logo/inputPassword/eyePassword.svg";
import IconUnvisible from "../../assets/logo/inputPassword/eyePassword2.svg";
import { Button } from "../../componenets/button";
import { Link } from "react-router-dom";
import { URLS } from "../../_configs/URLS";
import { useState } from "react";

type Props = {};

interface FormData {
    email: string,
    password: string,
}

export function PageLogin(props: Props) {
    const {
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const [iconVisible, setIconVisible] = useState(false);

    function onSubmit(data: FormData) {
        console.log("submit Login! => ", data);
        reset({
            email: "",
            password: "",
        });
    }

    return (
        <main className={"h-screen flex items-center justify-center"}>
            <div className={"h-full w-full p-10 flex flex-col justify-center md:w-1/2"}>
                <Title textCenter={true} text={"Se connecter"}/>
                <form className={" flex flex-col"} onSubmit={handleSubmit(onSubmit)}>
                    <InputBlock className={"p-1"} label={"Email"} required>
                        <Controller
                            rules={{
                                required: {
                                    value: true,
                                    message: "champ obligatoire",
                                },
                                pattern: {
                                    value: /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,}$/i,
                                    message: "email invalide",
                                },
                            }}
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type="email"
                                    error={errors.email}
                                />
                            )}
                        />
                    </InputBlock>
                    <InputBlock className={"p-1"} label={"Mot de passe"} required>
                        <Controller
                            rules={{
                                required: {
                                    value: true,
                                    message: "champ obligatoire",
                                },
                                minLength: {
                                    value: 8,
                                    message: "Le mot de passe doit contenir au minimum 8 caractères",
                                },
                            }}
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type={iconVisible ? "text" : "password"}
                                    endIcon={iconVisible ?
                                        <img onClick={() => setIconVisible(!iconVisible)} src={IconVisible}/> :
                                        <img onClick={() => setIconVisible(!iconVisible)} src={IconUnvisible}/>}
                                    error={errors.password}
                                />
                            )}
                        />
                    </InputBlock>
                    <Button name={"Se connecter"} full={true} width={"w-full"} type={"submit"}/>
                    <p className={"text-center mt-2"}>vous n'avez pas de compte? <Link
                        className={"text-primaryColor font-bold"} to={URLS.auth.signUp()}>S'inscrire</Link></p>
                </form>
            </div>
        </main>
    );
}
