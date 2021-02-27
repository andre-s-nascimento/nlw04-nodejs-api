import nodemailer from "nodemailer";

class SendMailService {
  constructor() {
    nodemailer.createTestAccount().then();
    //PARADO AOS 35:40 AULA04
  }

  /**
   * const resposta = await execute()
   */

  async execute() {}
}

export { SendMailService };
