public with sharing class fantasias {
    
    @AuraEnabled(cacheable=true)
    public static List<Fantasia__c> getFantasiasList() {
        return[SELECT Id, Name, Tamanho__c, valor_diario_aluguel__c,                 Status_da_fantasia__c, Cor__c, Imagem__c 
            FROM Fantasia__c
            ];
    }
}