/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Bot } from "./Bot";
import { BotCountArgs } from "./BotCountArgs";
import { BotFindManyArgs } from "./BotFindManyArgs";
import { BotFindUniqueArgs } from "./BotFindUniqueArgs";
import { CreateBotArgs } from "./CreateBotArgs";
import { UpdateBotArgs } from "./UpdateBotArgs";
import { DeleteBotArgs } from "./DeleteBotArgs";
import { BotService } from "../bot.service";
@graphql.Resolver(() => Bot)
export class BotResolverBase {
  constructor(protected readonly service: BotService) {}

  async _botsMeta(
    @graphql.Args() args: BotCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Bot])
  async bots(@graphql.Args() args: BotFindManyArgs): Promise<Bot[]> {
    return this.service.bots(args);
  }

  @graphql.Query(() => Bot, { nullable: true })
  async bot(@graphql.Args() args: BotFindUniqueArgs): Promise<Bot | null> {
    const result = await this.service.bot(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Bot)
  async createBot(@graphql.Args() args: CreateBotArgs): Promise<Bot> {
    return await this.service.createBot({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Bot)
  async updateBot(@graphql.Args() args: UpdateBotArgs): Promise<Bot | null> {
    try {
      return await this.service.updateBot({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Bot)
  async deleteBot(@graphql.Args() args: DeleteBotArgs): Promise<Bot | null> {
    try {
      return await this.service.deleteBot(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
