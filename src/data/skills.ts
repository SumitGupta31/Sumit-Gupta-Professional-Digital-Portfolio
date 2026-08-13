import { SkillCategory } from '@/types';
const items = (names: string[], description: string) => names.map(name => ({ name, description }));
export const skillCategories: SkillCategory[] = [
 { name: 'MuleSoft', description: 'Enterprise API lifecycle and composable integration delivery.', skills: items(['Mule 4','Anypoint Platform','API Manager','Runtime Manager','Design Center','DataWeave 2.0','Anypoint MQ','API-led Connectivity','Batch Processing'], 'MuleSoft integration capability') },
 { name: 'Salesforce', description: 'Cloud CRM integration and custom platform development.', skills: items(['Salesforce APIs','Apex','SOQL','Lightning Web Components','Sales Cloud','Service Cloud'], 'Salesforce capability') },
 { name: 'Programming', description: 'Pragmatic engineering for reliable API systems.', skills: items(['Java','DataWeave','SQL','JavaScript','TypeScript'], 'Programming language') },
 { name: 'Integration', description: 'Secure transport, transformation, and system connectivity.', skills: items(['REST APIs','SOAP APIs','OAuth 2.0','SFTP','Database Integration','Salesforce Integration','Messaging Systems'], 'Integration capability') },
 { name: 'DevOps & Tools', description: 'Repeatable delivery and healthy operations.', skills: items(['GitHub','GitLab','Jenkins','CI/CD','Maven','Postman'], 'Delivery tool') }
];
