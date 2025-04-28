import { VisitorLog } from "../models/VisitorLog.model.js";
import asyncHandler from "../utils/asyncHandler.js";

const handleVisitor = asyncHandler(async (req, res) => {
    const ipaddress =
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.connection.remoteAddress || "ip-not-found";

  let visitor = await VisitorLog.findOne({ ipaddress });

  if (visitor) {
    visitor.homepageVisits += 1;
    await visitor.save();
    return res
      .status(200)
      .json({ message: "Visit count incremented", visitor });
  } else {
    visitor = new VisitorLog({ ipaddress, homepageVisits: 1 });
    await visitor.save();
    return res.status(201).json({ message: "New visitor created", visitor });
  }
});

export { handleVisitor };