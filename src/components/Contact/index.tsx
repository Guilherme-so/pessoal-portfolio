import { FormEvent, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Contact = () => {
  const forminitialDetail = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(forminitialDetail);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState<any>({});

  const onFormUpdate = (category: string, event: FormEvent) => {
    setFormDetails({
      ...formDetails,
      [category]: event,
    });
  };

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    setButtonText("Enviando...");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Enviar");
    setFormDetails(forminitialDetail);
    
    if (response.ok) {
      setStatus({ success: true, message: "Email enviado com sucesso!" });
    } else {
      setStatus({
        success: false,
        message: "Todos os campos precisam estar preechidos!",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src="/assets/img/contact-img.svg" alt="contact" />
          </Col>
          <Col md={6}>
            <h2>Entre em contato!</h2>

            <form onSubmit={submitHandler}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Nome"
                    value={formDetails.firstName}
                    onChange={(e: any) =>
                      onFormUpdate("firstName", e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Sobrenome"
                    value={formDetails.lastName}
                    onChange={(e: any) =>
                      onFormUpdate("lastName", e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formDetails.email}
                    onChange={(e: any) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tell"
                    placeholder="Telefone"
                    value={formDetails.phone}
                    onChange={(e: any) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>

                <Col sm={12}>
                  <textarea
                    rows={6}
                    placeholder="Mensagem"
                    value={formDetails.message}
                    onChange={(e: any) =>
                      onFormUpdate("message", e.target.value)
                    }
                  ></textarea>

                  {status?.message && (
                    <Col>
                      <p
                        className={
                          status.success === true ? "success" : "danger"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}

                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
