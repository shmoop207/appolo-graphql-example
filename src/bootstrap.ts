import {singleton, define, bootstrap, IBootstrap, inject} from "appolo";
import {ServiceRepository} from "./modules/services/serviceRepository";
import {OwnerRepository} from "./modules/owners/ownerRepository";
import {CarRepository} from "./modules/cars/carRepository";

@define()
@singleton()
@bootstrap()
export class Bootstrap implements IBootstrap {

    @inject() serviceRepository: ServiceRepository;
    @inject() carRepository: CarRepository;
    @inject() ownerRepository: OwnerRepository;

    public async run() {
        // let owner = await this.ownerRepository.create({email: "test@aaa.com", firstName: "aaa", "lastName": "bbb"});
        // let car = await this.carRepository.create({
        //     age: 2,
        //     brand: "honda",
        //     price: "1000$",
        //     owner_id: owner._id.toString(),
        //     title: "test"
        // });
        //
        // await this.serviceRepository.create({date:Date.now(),name:"fix car",car_id:car._id.toString()})
    }
}
