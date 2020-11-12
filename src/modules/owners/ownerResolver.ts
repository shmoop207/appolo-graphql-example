import {Resolver, FieldResolver, Root, Query, Register, Arg} from "@appolo/graphql";
import {define, singleton, inject} from "@appolo/inject";
import {Car} from "../cars/car";
import {CarRepository} from "../cars/carRepository";
import {Owner} from "./owner";
import {OwnerRepository} from "./ownerRepository";
import {Service} from "../services/service";


@Resolver(of => Owner)
@Register()
@singleton()
export class OwnerResolver {

    @inject() ownerRepository: OwnerRepository;
    @inject() carRepository: CarRepository;

    @Query(returns => [Owner])
    public async owners(): Promise<Owner[]> {
        let {results} = await this.ownerRepository.getAll({lean: true});

        return results;
    }

    @Query(returns => Owner)
    public owner(@Arg("id") id: string): Promise<Owner> {
        return this.ownerRepository.getById(id, {lean: true});
    }

    @FieldResolver(returns => [Car])
    public async cars(@Root() owner: Owner): Promise<Car[]> {
        let {results} = await this.carRepository.getAll({lean: true, filter: {owner_id: owner._id}});

        return results;
    }

}
