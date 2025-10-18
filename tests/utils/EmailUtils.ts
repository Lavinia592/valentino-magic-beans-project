import { MailSlurp } from "mailslurp-client";

// export async function createInbox() {
//   const mailslurp = new MailSlurp({ apiKey: process.env.MAIL_SLURP_API_KEY! });
//   const inbox = await mailslurp.inboxController.createInboxWithDefaults();
//   return inbox;
// }

export class EmailUtils {
  private mailSlurp = new MailSlurp({
    apiKey: process.env.MAIL_SLURP_API_KEY!,
  });

  constructor() {
    this.mailSlurp = new MailSlurp({ apiKey: process.env.MAIL_SLURP_API_KEY! });
  }

  public async createInbox() {
    const inbox =
      await this.mailSlurp.inboxController.createInboxWithDefaults();

    return inbox;
  }

  public async waitForLAtestEmail(inboxId: string) {
    const email = await this.mailSlurp.waitForLatestEmail(inboxId, 30000);
    return email;
  }
}
