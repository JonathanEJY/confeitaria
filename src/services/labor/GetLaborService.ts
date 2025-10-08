import GetLaborModel from "../../models/labor/GetLaborModel";

class GetLaborService {
  async execute(userId: string) {
    const getLaborModel = new GetLaborModel();
    const labor = await getLaborModel.getLabor(userId);
    return labor;
  }
}

export default GetLaborService;