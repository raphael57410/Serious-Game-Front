import { InputBlock } from "../../componenets/input/InputBlock";
import { Input } from "../../componenets/input/Input";
import { Title } from "../../componenets/title";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../componenets/button";
import { Text } from "../../componenets/text";
import IconVisible from "../../assets/logo/inputPassword/eyePassword.svg";
import IconUnvisible from "../../assets/logo/inputPassword/eyePassword2.svg";

import { useState } from "react";
import { Link } from "react-router-dom";
import { URLS } from "../../_configs/URLS";

type Props = {};

interface FormData {
    lastName: string,
    firstName: string,
    email: string,
    password: string,
}

export function PageRegister(props: Props) {
    const {
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            lastName: "",
            firstName: "",
            email: "",
            password: "",
        },
    });
    const [iconVisible, setIconVisible] = useState(false);

    function onSubmit(data: FormData) {
        console.log("submit! => ", data);
        reset({
            lastName: "",
            firstName: "",
            email: "",
            password: "",
        });
    }

    return (
        <main className="h-full flex">
            <div className={"w-full h-screen flex flex-col-reverse items-center-center md:flex-row mt-0"}>
                <div className={"flex flex-col p-10 justify-center md:w-1/2"}>
                    <Title size={"sm"} text={"S'inscrire"} textCenter={false}/>
                    <form className={" flex flex-col"} onSubmit={handleSubmit(onSubmit)}>
                        <InputBlock className={"p-1"} label={"Nom"} required>
                            <Controller
                                rules={{
                                    required: {
                                        value: true,
                                        message: "champ obligatoire",
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "minimum 3 caractères",
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "maximum 10 caractères",
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: "seulement les lettres sont accepté",
                                    },
                                }}
                                name="lastName"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="text"
                                        error={errors.lastName}
                                    />
                                )}
                            />
                        </InputBlock>
                        <InputBlock className={"p-1"} label={"Prénom"} required>
                            <Controller
                                rules={{
                                    required: {
                                        value: true,
                                        message: "champ obligatoire",
                                    },
                                    pattern: {
                                        value: /[A-Za-z]/,
                                        message: "seulement les lettres sont accepté",
                                    },
                                }}
                                name="firstName"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="text"
                                        error={errors.firstName}
                                    />
                                )}
                            />
                        </InputBlock>
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
                        <Button name={"S'inscrire"} full={true} width={"w-full"} type={"submit"}/>
                        <p className={"text-center mt-2"}>vous avez deja un compte? <Link
                            className={"text-primaryColor font-bold"} to={URLS.auth.signIn()}>Se
                            connecter</Link></p>
                    </form>
                </div>
                <div
                    className={"text-center w-full h-full justify-end p-2 bg-textColor flex flex-col md:justify-center"}>
                    <Title textCenter={false} text={"Rejoignez l’aventure Metz Numeric School"} white/>
                    <Text
                        white
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                </div>
            </div>
        </main>
    );
}
