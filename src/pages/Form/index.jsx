import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../service";


const Form = () => {
  const CEPRef = useRef();
  const [nameError, setNameError] = useState(false);
  const [cpfError, setCPFError] = useState(false);
  const [birthdayError, setBirthdayError] = useState(false);
  const [isData, setIsData] = useState(false);
  const [isLocal, setIsLocal] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    cpf: "",
    birthday: "",
    genre: "Homem",
    mother: "",
    address: "",
    neighborhood: "",
    city: "",
    uf: "",
    number: "",
    complement: "",
  });

  let navigate = useNavigate();

  const CheckCEP = () => {
    const cep = CEPRef.current.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFormValues({
          name: formValues.name,
          cpf: formValues.cpf,
          birthday: formValues.birthday,
          genre: "Homem",
          mother: formValues.mother,
          cep: cep,
          address: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          uf: data.uf,
          number: formValues.number,
          complement: formValues.complement,
        });
      });
  };

  function createUsers() {
    const postData = {
      fullName: formValues.name,
      Birthday: formValues.birthday,
      cpf: formValues.cpf,
      gender: "Homem",
      mothersName: formValues.mother,
      cep: formValues.cep,
      address: formValues.address,
      uf: formValues.uf,
      city: formValues.city,
      number: formValues.number,
      addInfo: formValues.complement,
    };
    console.log(postData);
    createUser(postData)
      .then((response) => {
        console.log("Usuário criado");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  }

  function Next() {
    if (TestaCPF(strCPF) === false) {
      setCPFError(true);
    } 
    else {
      setIsData(true);
      setIsLocal(true);
      setNameError(false);
      setCPFError(false);
      setBirthdayError(false);
    }
  }

  function Back() {
    setIsData(false);
    setIsLocal(false);
  }

  function End() {
    setIsData(true);
    setIsLocal(false);
    setIsEnd(true);
  }

  let strCPF = formValues.cpf;
  function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    var i;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="bg-pastel w-screen">
      <div className="flex justify-center h-screen items-center">
        <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            {!isData ? (
              <div>
                <h1 class="text-xl font-bold leading-tight tracking-tight mb-5 text-gray-900 md:text-2xl ">
                  Dados Pessoais
                </h1>
                <div class="space-y-4 md:space-y-5" action="#">
                  <div className="flex space-x-5">
                    <div>
                      {!nameError ? (
                        <div>
                          <label class="block mb-2 text-sm font-medium text-gray-900 ">
                            Nome Completo
                          </label>
                          <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={handleInputChange}
                            type="text"
                            value={formValues.name}
                            placeholder="Nome"
                            name="name"
                          />
                        </div>
                      ) : (
                        <div>
                          <label class="block mb-2 text-sm font-medium text-gray-900 ">
                            Nome Completo
                          </label>
                          <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={handleInputChange}
                            type="text"
                            value={formValues.name}
                            placeholder="Nome"
                            name="name"
                          />
                        </div>
                      )}
                      {cpfError ? (
                        <div>
                          <label class="block mt-2 mb-2 text-sm font-medium text-gray-900 ">
                            CPF
                          </label>
                          <input
                            class="bg-gray-50 border border-red-500 text-red-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={handleInputChange}
                            type="text"
                            value={formValues.cpf}
                            placeholder="000.000.000.00"
                            name="cpf"
                          />
                          <p class="text-red-500 mt-1 text-xs italic">
                            CPF Inválido
                          </p>
                        </div>
                      ) : (
                        <div>
                          <label class="block mt-2 mb-2 text-sm font-medium text-gray-900 ">
                            CPF
                          </label>
                          <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={handleInputChange}
                            type="text"
                            value={formValues.cpf}
                            placeholder="000.000.000.00"
                            name="cpf"
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 ">
                          Data de Nascimento
                        </label>
                        <input
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={handleInputChange}
                          type="date"
                          value={formValues.birthday}
                          placeholder="DD/MM/YY"
                          name="birthday"
                        />
                      </div>
                      <div>
                        <label class="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
                          Gênero
                        </label>
                        <select
                          id="countries"
                          placeholder="genre"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option name="Homem">Homem</option>
                          <option name="Mulher">Mulher</option>
                          <option name="Outros">Outros</option>
                          <option>Prefiro não informar</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 ">
                      Nome da mãe
                    </label>
                    <input
                      onChange={handleInputChange}
                      value={formValues.mother}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      placeholder="Mãe"
                      name="mother"
                    />
                  </div>

                  <button
                    onClick={Next}
                    className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Próximo
                  </button>
                </div>
              </div>
            ) : null}

            {isLocal ? (
              <div>
                <h1 class="text-xl font-bold leading-tight tracking-tight mb-5 text-gray-900 md:text-2xl ">
                  Endereço
                </h1>
                <div class="space-y-4 md:space-y-5" action="#">
                  <div className="flex space-x-5">
                    <div>
                      <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 ">
                          CEP
                        </label>
                        <div className="flex items-center">
                          <input
                            ref={CEPRef}
                            value={formValues.cep}
                            type="text"
                            name="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="CEP"
                            required=""
                          />
                          <button
                            onClick={CheckCEP}
                            class=" border-transparent ml-2 text-sm rounded"
                            type="button"
                          >
                            <svg
                              aria-hidden="true"
                              class="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div>
                        <label class="block mt-2 mb-2 text-sm font-medium text-gray-900 ">
                          Bairro
                        </label>
                        <input
                          type="text"
                          placeholder="Rua Santos"
                          name="address"
                          onChange={handleInputChange}
                          value={formValues.neighborhood}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 ">
                          Endereço
                        </label>
                        <input
                          type="text"
                          placeholder="Rua Santos"
                          name="address"
                          onChange={handleInputChange}
                          value={formValues.address}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="flex justify-between gap-5 mt-2">
                        <div className="w-1/4">
                          <label class="block mb-2 text-sm font-medium text-gray-900 ">
                            UF
                          </label>
                          <input
                            type="text"
                            placeholder="Rua Santos"
                            name="address"
                            onChange={handleInputChange}
                            value={formValues.uf}
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </div>
                        <div className="w-3/4">
                          <label class="block mb-2 text-sm font-medium text-gray-900 ">
                            Cidade
                          </label>
                          <input
                            type="text"
                            placeholder="Rua Santos"
                            name="address"
                            onChange={handleInputChange}
                            value={formValues.city}
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div className="w-32">
                      <label class="block mb-2 text-sm font-medium text-gray-900 ">
                        Número
                      </label>
                      <input
                        type="text"
                        placeholder="105"
                        name="number"
                        onChange={handleInputChange}
                        value={formValues.number}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="w-64">
                      <label class="block mb-2 text-sm font-medium text-gray-900 ">
                        Complemento
                      </label>
                      <input
                        type="text"
                        placeholder="APT 104"
                        name="complement"
                        onChange={handleInputChange}
                        value={formValues.complement}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={Back}
                      className="w-1/3 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      Voltar
                    </button>
                    <button
                      onClick={End}
                      className="w-1/3 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      Salvar
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
            {isEnd ? (
              <div>
                <div className="flex w-full justify-end">
                  <button onClick={() => setIsDisable(!isDisable)}>
                    <svg
                      class="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <h1 className="text-xl mb-5 text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Verificar informações
                </h1>
                <div className="space-y-4 md:space-y-5" action="#">
                  <div className="flex space-x-5">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Nome
                      </label>
                      {!isDisable ? (
                        <input
                          disabled
                          value={formValues.name}
                          className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        />
                      ) : (
                        <input
                          type="text"
                          name="name"
                          onChange={handleInputChange}
                          value={formValues.name}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        CPF
                      </label>
                      {!isDisable ? (
                        <input
                          disabled
                          value={formValues.cpf}
                          className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        />
                      ) : (
                        <input
                          type="text"
                          name="cpf"
                          onChange={handleInputChange}
                          value={formValues.cpf}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-5">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Data de Nascimento
                      </label>
                      {!isDisable ? (
                        <input
                          disabled
                          value={formValues.birthday}
                          className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        />
                      ) : (
                        <input
                          type="text"
                          name="birthday"
                          onChange={handleInputChange}
                          value={formValues.birthday}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Gênero
                      </label>
                      {!isDisable ? (
                        <input
                          disabled
                          value={formValues.genre}
                          className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        />
                      ) : (
                        <input
                          type="text"
                          name="genre"
                          onChange={handleInputChange}
                          value={formValues.genre}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Nome da mãe
                    </label>
                    {!isDisable ? (
                      <input
                        disabled
                        value={formValues.mother}
                        className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      />
                    ) : (
                      <input
                        type="text"
                        name="mother"
                        onChange={handleInputChange}
                        value={formValues.mother}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    )}
                  </div>
                  <div className="flex space-x-5">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        CEP
                      </label>
                      {!isDisable ? (
                        <input
                          disabled
                          value={formValues.cep}
                          className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        />
                      ) : (
                        <input
                          type="text"
                          name="cep"
                          onChange={handleInputChange}
                          value={formValues.cep}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Endereço
                      </label>
                      {!isDisable ? (
                        <input
                          disabled
                          value={formValues.address}
                          className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        />
                      ) : (
                        <input
                          type="text"
                          name="address"
                          onChange={handleInputChange}
                          value={formValues.address}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-5">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Cidade
                      </label>
                      {!isDisable ? (
                        <input
                          disabled
                          value={formValues.city}
                          className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        />
                      ) : (
                        <input
                          type="text"
                          name="city"
                          onChange={handleInputChange}
                          value={formValues.city}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Bairro
                      </label>
                      {!isDisable ? (
                        <input
                          disabled
                          value={formValues.neighborhood}
                          className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        />
                      ) : (
                        <input
                          type="text"
                          name="neighborhood"
                          onChange={handleInputChange}
                          value={formValues.neighborhood}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-5">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        UF
                      </label>
                      {!isDisable ? (
                        <input
                          disabled
                          value={formValues.uf}
                          className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        />
                      ) : (
                        <input
                          type="text"
                          name="uf"
                          onChange={handleInputChange}
                          value={formValues.uf}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Número
                      </label>
                      {!isDisable ? (
                        <input
                          disabled
                          value={formValues.number}
                          className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        />
                      ) : (
                        <input
                          type="text"
                          name="number"
                          onChange={handleInputChange}
                          value={formValues.number}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Complemento
                      </label>
                      {!isDisable ? (
                        <input
                          disabled
                          value={formValues.complement}
                          className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        />
                      ) : (
                        <input
                          type="text"
                          name="complement"
                          onChange={handleInputChange}
                          value={formValues.complement}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => { navigate('/') }}
                    className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Enviar
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
